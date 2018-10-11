'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">opeb documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-3ba57578a6eb84edd404e73129657534"' : 'data-target="#xs-components-links-module-AppModule-3ba57578a6eb84edd404e73129657534"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-3ba57578a6eb84edd404e73129657534"' : 'id="xs-components-links-module-AppModule-3ba57578a6eb84edd404e73129657534"' }>
                                        <li class="link">
                                            <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PrivateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrivateComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StatisticsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatisticsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TopMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopMenuComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-3ba57578a6eb84edd404e73129657534"' : 'data-target="#xs-injectables-links-module-AppModule-3ba57578a6eb84edd404e73129657534"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-3ba57578a6eb84edd404e73129657534"' : 'id="xs-injectables-links-module-AppModule-3ba57578a6eb84edd404e73129657534"' }>
                                        <li class="link">
                                            <a href="injectables/StatisticsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>StatisticsService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppRoutingModule-ff468c72f7d1287f0bbcc589bd63ff77"' : 'data-target="#xs-injectables-links-module-AppRoutingModule-ff468c72f7d1287f0bbcc589bd63ff77"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppRoutingModule-ff468c72f7d1287f0bbcc589bd63ff77"' : 'id="xs-injectables-links-module-AppRoutingModule-ff468c72f7d1287f0bbcc589bd63ff77"' }>
                                        <li class="link">
                                            <a href="injectables/AppAuthGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AppAuthGuard</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ScientificModule.html" data-type="entity-link">ScientificModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ScientificModule-0c30fb272ddbcaa3731ec76d3211115e"' : 'data-target="#xs-components-links-module-ScientificModule-0c30fb272ddbcaa3731ec76d3211115e"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ScientificModule-0c30fb272ddbcaa3731ec76d3211115e"' : 'id="xs-components-links-module-ScientificModule-0c30fb272ddbcaa3731ec76d3211115e"' }>
                                        <li class="link">
                                            <a href="components/BenchmarkingDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BenchmarkingDetailComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/BenchmarkingListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BenchmarkingListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ScientificComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScientificComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ScientificListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScientificListComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-ScientificModule-0c30fb272ddbcaa3731ec76d3211115e"' : 'data-target="#xs-injectables-links-module-ScientificModule-0c30fb272ddbcaa3731ec76d3211115e"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-ScientificModule-0c30fb272ddbcaa3731ec76d3211115e"' : 'id="xs-injectables-links-module-ScientificModule-0c30fb272ddbcaa3731ec76d3211115e"' }>
                                        <li class="link">
                                            <a href="injectables/ScientificService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ScientificService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ScientificRoutingModule.html" data-type="entity-link">ScientificRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ToolModule.html" data-type="entity-link">ToolModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ToolModule-5c96e3635c6ca8aeac5aa51d4db263a5"' : 'data-target="#xs-components-links-module-ToolModule-5c96e3635c6ca8aeac5aa51d4db263a5"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ToolModule-5c96e3635c6ca8aeac5aa51d4db263a5"' : 'id="xs-components-links-module-ToolModule-5c96e3635c6ca8aeac5aa51d4db263a5"' }>
                                        <li class="link">
                                            <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PrivateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrivateComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StatisticsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatisticsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ToolComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToolComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ToolTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToolTableComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-ToolModule-5c96e3635c6ca8aeac5aa51d4db263a5"' : 'data-target="#xs-injectables-links-module-ToolModule-5c96e3635c6ca8aeac5aa51d4db263a5"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-ToolModule-5c96e3635c6ca8aeac5aa51d4db263a5"' : 'id="xs-injectables-links-module-ToolModule-5c96e3635c6ca8aeac5aa51d4db263a5"' }>
                                        <li class="link">
                                            <a href="injectables/ToolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ToolService</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-ToolModule-5c96e3635c6ca8aeac5aa51d4db263a5"' : 'data-target="#xs-pipes-links-module-ToolModule-5c96e3635c6ca8aeac5aa51d4db263a5"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-ToolModule-5c96e3635c6ca8aeac5aa51d4db263a5"' : 'id="xs-pipes-links-module-ToolModule-5c96e3635c6ca8aeac5aa51d4db263a5"' }>
                                        <li class="link">
                                            <a href="pipes/ChartIdPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartIdPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/KeyValuePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">KeyValuePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/SourceBadgeClassPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SourceBadgeClassPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ToolRoutingModule.html" data-type="entity-link">ToolRoutingModule</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ToolDetailComponent.html" data-type="entity-link">ToolDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ToolListComponent.html" data-type="entity-link">ToolListComponent</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/Communities.html" data-type="entity-link">Communities</a>
                    </li>
                    <li class="link">
                        <a href="classes/Community.html" data-type="entity-link">Community</a>
                    </li>
                    <li class="link">
                        <a href="classes/Filter.html" data-type="entity-link">Filter</a>
                    </li>
                    <li class="link">
                        <a href="classes/SharedModule.html" data-type="entity-link">SharedModule</a>
                    </li>
                    <li class="link">
                        <a href="classes/SingleTextField.html" data-type="entity-link">SingleTextField</a>
                    </li>
                    <li class="link">
                        <a href="classes/Stats.html" data-type="entity-link">Stats</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/OpebService.html" data-type="entity-link">OpebService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/Metrics.html" data-type="entity-link">Metrics</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Tool.html" data-type="entity-link">Tool</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
