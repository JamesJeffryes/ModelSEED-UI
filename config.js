
/* service endpoint and UI configuration settings */
angular.module('config', []).service('config', function() {


    this.releaseVersion = 'vAlpha-1.1.0';

    // wether or not to include plants UI components
    this.includePlants = true;

    this.services = {
                        auth_url: "http://tutorial.theseed.org/Sessions/Login",
                        app_url: "http://p3.theseed.org/services/app_service",
                        ws_url: "http://p3.theseed.org/services/Workspace",
                        //ms_url: this.includePlants ? "https://p3c.theseed.org/dev1/services/ProbModelSEED" :
                        //                             "https://p3.theseed.org/services/ProbModelSEED/",
                        ms_url: "https://p3.theseed.org/services/ProbModelSEED/",
                        shock_url: "http://p3.theseed.org/services/shock_api",
                        patric_auth_url: "https://user.patricbrc.org/authenticate",
                        solr_url: "https://www.patricbrc.org/api/",
                        ms_support_url: "http://bio-data-1.mcs.anl.gov/services/ms_fba"
                    };


    this.paths = {
                  media: "/chenry/public/modelsupport/media",
                  maps: "/nconrad/public/maps/",
                  plants: {
                      models: '/plantseed/Models/',
                      genomes: '/plantseed/Genomes/'
                      }
                 };
})
