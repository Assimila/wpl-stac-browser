import configureBasemap from '../../../basemaps.config';
import Utils from '../../utils';
import { mapState } from 'vuex';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import ZoomControl from 'ol/control/Zoom.js';
import AttributionControl from 'ol/control/Attribution.js';

export default {
  computed: {
    ...mapState(['buildTileUrlTemplate', 'crossOriginMedia', 'displayGeoTiffByDefault', 'maxPreviewsOnMap', 'useTileLayerAsFallback']),
    stacLayerOptions() {
      return {
        buildTileUrlTemplate: this.buildTileUrlTemplate,
        crossOriginMedia: this.crossOriginMedia,
        displayGeoTiffByDefault: this.displayGeoTiffByDefault,
        maxPreviewsOnMap: this.maxPreviewsOnMap,
        useTileLayerAsFallback: this.useTileLayerAsFallback
      };
    },
    fullscreenOptions() {
      return {
        title: {
          'false': this.$t('fullscreen.show'),
          'true': this.$t('fullscreen.exit'),
        }
      };
    }
  },
  data() {
    return {
      map: null,
      zoomControl: null,
      attributionControl: null
    };
  },
  created() {
    this.$root.$on('uiLanguageChanged', this.translate);
  },
  methods: {
    createMap(element) {
      this.map = new Map({
        target: element,
        controls: [],
        view: new View({
          center: [0, 0],
          zoom: 0,
          showFullExtent: true,
        }),
      });
      this.createControls();
    },
    createControls() {
      if (this.zoomControl) {
        this.map.removeControl(this.zoomControl);
        this.zoomControl = null;
      }
      if (this.attributionControl) {
        this.map.removeControl(this.attributionControl);
        this.attributionControl = null;
      }

      this.zoomControl = new ZoomControl({
        zoomInLabel: this.$t('mapping.zoom.in.label'),
        zoomOutLabel: this.$t('mapping.zoom.out.label'),
        zoomInTipLabel: this.$t('mapping.zoom.in.description'),
        zoomOutTipLabel: this.$t('mapping.zoom.out.description')
      });
      this.map.addControl(this.zoomControl);

      this.attributionControl = new AttributionControl({
        tipLabel: this.$t('mapping.attribution.description'),
        label: this.$t('mapping.attribution.label'),
        collapseLabel: this.$t('mapping.attribution.collapseLabel'),
      });
      this.map.addControl(this.attributionControl);
    },
    disableMouseWheelZoom() {
      const interaction = this.map.getInteractions().getArray()
        .find(interaction => interaction instanceof MouseWheelZoom);
      if (interaction) {
        this.map.removeInteraction(interaction);
      }
    },
    translate() {
      this.createControls();
    },
    async addBasemaps(stac) {
      const basemaps = await this.getBasemaps(this.map, stac);
      for (const source of basemaps) {
        this.map.addLayer(new TileLayer({ source }));
      }
    },
    async getBasemaps(stac) {
      const basemapPromises = configureBasemap(stac, this.map, this.$i18n)
        .map(async (options) => {
          const cls = (await import(`ol/source/${options.is}.js`)).default;
          return new cls(options);
        })
        .filter(options => Utils.isObject(options));
      return Promise.all(basemapPromises);
    }
  }
};
