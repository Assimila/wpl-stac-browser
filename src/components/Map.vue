<template>
  <div class="map-container">
    <div ref="map" class="map">
      <!-- this will be filled by OpenLayers -->
    </div>
    <b-popover
      v-if="popover && selectedItems" show placement="left" triggers="manual"
      :target="selectedItems.target" boundary="#stac-browser" container="#stac-browser" :key="selectedItems.key"
    >
      <Items :items="selectedItems.items" />
      <div class="text-center">
        <b-button target="_blank" variant="danger" @click="resetSelectedItems">{{ $t('mapping.close') }}</b-button>
      </div>
    </b-popover>
  </div>
</template>

<script>
import MapMixin from './maps/MapMixin.js';
import STAC from '../models/stac';
import Utils, { geojsonMediaType } from '../utils';
import { object as formatObject, string as formatString } from '@radiantearth/stac-fields/datatypes';
import { mapGetters } from 'vuex';
import { BPopover } from 'bootstrap-vue';
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4.js';
import StacLayer from 'ol-stac';
import { getStacObjectsForEvent } from 'ol-stac/util.js';

register(proj4); // required to support source reprojection

const LABEL_EXT = 'https://stac-extensions.github.io/label/v1.*/schema.json';

export default {
  name: 'Map',
  components: {
    BPopover,
    Items: () => import('../components/Items.vue')
  },
  mixins: [
    MapMixin
  ],
  props: {
    stac: {
      type: Object,
      default: null
    },
    assets: {
      type: Object,
      default: null
    },
    items: {
      type: Object,
      default: null
    },
    noscroll: {
      type: Boolean,
      default: false
    },
    popover: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      secondaryColor: '#FF8833',
      secondaryWeight: 2,
      show: false,
      areaSelect: null,
      stacLayer: null,
      geojson: null,
      selectedItems: null
    };
  },
  computed: {
    ...mapGetters(['getStac', 'supportsExtension'])
  },
  watch: {
    async stac() {
      await this.showStacLayer();
    },
    async assets() {
      if (!this.stacLayer) {
        return;
      }
      await this.stacLayer.setAssets(this.assets);
    }
  },
  async mounted() {
    await this.showStacLayer();
  },
  methods: {
    async showStacLayer() {
      this.map = null;
      this.stacLayer = null;

      this.createMap(this.$refs.map);
      await this.addBasemaps(this.stac);

      // Add STAC layer
      if (this.stac) {
        this.stacLayer = new StacLayer(Object.assign({}, this.stacLayerOptions, {
          url: this.stac.getAbsoluteUrl(),
          data: this.stac,
          items: this.items,
          assets: this.assets || null,
          displayWebMapLink: true,
        }));
        this.stacLayer.on('assetsready', () => this.setLayerTitles(this.stacLayer));
        this.map.addLayer(this.stacLayer);
        this.map.getView().fit(this.stacLayer.getExtent());
        if (this.popover) {
          this.map.on('singleclick', async (event) => {
            const objects = await getStacObjectsForEvent(event, this.stacLayer.getData());
            if (objects.length > 0) {
              this.selectedItems = {
                target: event.originalEvent.srcElement || event.originalEvent.target,
                key: event.map.ol_uid,
                items: objects
              };
            }
            else {
              this.selectedItems = null;
            }
          });
        }
      }

      if (this.noscroll) {
        this.disableMouseWheelZoom();
      }
    },
    async showItemsLayer() {
      if (this.map && this.itemsLayer) {
        this.map.removeLayer(this.itemsLayer);
        this.itemsLayer = null;
      }
      if (this.items) {
        this.itemsLayer = new StacLayer(Object.assign({}, this.stacLayerOptions, {
          data: this.items,
          displayWebMapLink: false,
        }));
        this.itemsLayer.on('assetsready', () => this.setLayerTitles(this.itemsLayer));
        this.map.addLayer(this.itemsLayer);
        if (!this.stac) {
          this.map.getView().fit(this.itemsLayer.getExtent());
        }
      }
    },
    setLayerTitles(groupLayer) {
      // Assign titles for e.g. a layerswitcher
      for (const layer of groupLayer.getLayersArray()) {
        const stac = layer.get('stac');
        let title;
        if (stac.isAsset() || stac.isLink()) {
          title = stac.getMetadata('title') || stac.getKey();
        } else {
          title = stac.getMetadata('title') || stac.getMetadata('id');
        }
        layer.set('title', title);
      }
    },
    resetSelectedItems() {
      this.selectedItems = null;
    }
  }
};
</script>

<style lang="scss">
@import "../../node_modules/ol/ol.css";
</style>
