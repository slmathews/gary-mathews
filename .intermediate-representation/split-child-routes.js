
    import React from 'react'
    const rootRoute = { childRoutes: [
      {
        path:'/',
        component: require('/Users/kylemathews/programs/gary-mathews/layouts/default'),
        indexRoute: 
      {
        
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            let Component = require('/Users/kylemathews/programs/gary-mathews/pages/index.js')
            if (Component.default) {
              Component = Component.default
            }
            require.ensure([], (require) => {
              const data = require('./json/3466353006.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---index')
          }, 'page-component---pages-index-js')
        }
      },
    
        childRoutes: [
      
      {
        path:'/chapters/teaching-career/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
            if (Component.default) {
              Component = Component.default
            }
            require.ensure([], (require) => {
              const data = require('./json/1630189618.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---chapters-teaching-career')
          }, 'page-component---page-templates-markdown-page-js')
        }
      },
    
      {
        path:'/chapters/secondary-school/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
            if (Component.default) {
              Component = Component.default
            }
            require.ensure([], (require) => {
              const data = require('./json/627288387.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---chapters-secondary-school')
          }, 'page-component---page-templates-markdown-page-js')
        }
      },
    
      {
        path:'/chapters/scouting/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
            if (Component.default) {
              Component = Component.default
            }
            require.ensure([], (require) => {
              const data = require('./json/3232130960.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---chapters-scouting')
          }, 'page-component---page-templates-markdown-page-js')
        }
      },
    
      {
        path:'/chapters/ricks-college/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
            if (Component.default) {
              Component = Component.default
            }
            require.ensure([], (require) => {
              const data = require('./json/1875428991.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---chapters-ricks-college')
          }, 'page-component---page-templates-markdown-page-js')
        }
      },
    
      {
        path:'/chapters/mission/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
            if (Component.default) {
              Component = Component.default
            }
            require.ensure([], (require) => {
              const data = require('./json/3680739585.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---chapters-mission')
          }, 'page-component---page-templates-markdown-page-js')
        }
      },
    
      {
        path:'/chapters/mission/1964-1-18-mission-letter/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
            if (Component.default) {
              Component = Component.default
            }
            require.ensure([], (require) => {
              const data = require('./json/3168408872.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---chapters-mission-1964-1-18-mission-letter')
          }, 'page-component---page-templates-markdown-page-js')
        }
      },
    
      {
        path:'/chapters/elementary-school/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
            if (Component.default) {
              Component = Component.default
            }
            require.ensure([], (require) => {
              const data = require('./json/2532884093.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---chapters-elementary-school')
          }, 'page-component---page-templates-markdown-page-js')
        }
      },
    
      {
        path:'/chapters/byu-undergrad/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
            if (Component.default) {
              Component = Component.default
            }
            require.ensure([], (require) => {
              const data = require('./json/4064928808.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---chapters-byu-undergrad')
          }, 'page-component---page-templates-markdown-page-js')
        }
      },
    
      {
        path:'/chapters/byu-graduate/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
            if (Component.default) {
              Component = Component.default
            }
            require.ensure([], (require) => {
              const data = require('./json/3919243718.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---chapters-byu-graduate')
          }, 'page-component---page-templates-markdown-page-js')
        }
      },
    
      {
        path:'/404/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
            if (Component.default) {
              Component = Component.default
            }
            require.ensure([], (require) => {
              const data = require('./json/4124927185.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---404')
          }, 'page-component---page-templates-markdown-page-js')
        }
      },
    
      {
        path:'/images/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            let Component = require('/Users/kylemathews/programs/gary-mathews/pages/images.js')
            if (Component.default) {
              Component = Component.default
            }
            require.ensure([], (require) => {
              const data = require('./json/2612083915.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---images')
          }, 'page-component---pages-images-js')
        }
      },
    
      {
        path:'/',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            let Component = require('/Users/kylemathews/programs/gary-mathews/pages/index.js')
            if (Component.default) {
              Component = Component.default
            }
            require.ensure([], (require) => {
              const data = require('./json/3466353006.json')
              cb(null, () => <Component {...nextState} {...data} />)
            }, 'path---index')
          }, 'page-component---pages-index-js')
        }
      },
    ]},]}
    module.exports = rootRoute