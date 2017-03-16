
    import React from 'react'
    const rootRoute = { childRoutes: [
      {
        path: '/',
        component: require('/Users/kylemathews/programs/gary-mathews/layouts/default'),
        indexRoute: 
      {
        
        component: (props) => {
          let Component = require('/Users/kylemathews/programs/gary-mathews/pages/index.js')
          if (Component.default) {
            Component = Component.default
          }
          const data = require('./json/3466353006.json')
          return (
            <Component {...props} {...data} />
          )
        },
      },
    
        childRoutes: [
      
      {
        path:'/chapters/teaching-career/',
        component: (props) => {
          let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
          if (Component.default) {
            Component = Component.default
          }
          const data = require('./json/1630189618.json')
          return (
            <Component {...props} {...data} />
          )
        },
      },
    
      {
        path:'/chapters/secondary-school/',
        component: (props) => {
          let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
          if (Component.default) {
            Component = Component.default
          }
          const data = require('./json/627288387.json')
          return (
            <Component {...props} {...data} />
          )
        },
      },
    
      {
        path:'/chapters/scouting/',
        component: (props) => {
          let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
          if (Component.default) {
            Component = Component.default
          }
          const data = require('./json/3232130960.json')
          return (
            <Component {...props} {...data} />
          )
        },
      },
    
      {
        path:'/chapters/ricks-college/',
        component: (props) => {
          let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
          if (Component.default) {
            Component = Component.default
          }
          const data = require('./json/1875428991.json')
          return (
            <Component {...props} {...data} />
          )
        },
      },
    
      {
        path:'/chapters/mission/',
        component: (props) => {
          let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
          if (Component.default) {
            Component = Component.default
          }
          const data = require('./json/3680739585.json')
          return (
            <Component {...props} {...data} />
          )
        },
      },
    
      {
        path:'/chapters/mission/1964-1-18-mission-letter/',
        component: (props) => {
          let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
          if (Component.default) {
            Component = Component.default
          }
          const data = require('./json/3168408872.json')
          return (
            <Component {...props} {...data} />
          )
        },
      },
    
      {
        path:'/chapters/elementary-school/',
        component: (props) => {
          let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
          if (Component.default) {
            Component = Component.default
          }
          const data = require('./json/2532884093.json')
          return (
            <Component {...props} {...data} />
          )
        },
      },
    
      {
        path:'/chapters/byu-undergrad/',
        component: (props) => {
          let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
          if (Component.default) {
            Component = Component.default
          }
          const data = require('./json/4064928808.json')
          return (
            <Component {...props} {...data} />
          )
        },
      },
    
      {
        path:'/chapters/byu-graduate/',
        component: (props) => {
          let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
          if (Component.default) {
            Component = Component.default
          }
          const data = require('./json/3919243718.json')
          return (
            <Component {...props} {...data} />
          )
        },
      },
    
      {
        path:'/404/',
        component: (props) => {
          let Component = require('/Users/kylemathews/programs/gary-mathews/page-templates/markdown-page.js')
          if (Component.default) {
            Component = Component.default
          }
          const data = require('./json/4124927185.json')
          return (
            <Component {...props} {...data} />
          )
        },
      },
    
      {
        path:'/images/',
        component: (props) => {
          let Component = require('/Users/kylemathews/programs/gary-mathews/pages/images.js')
          if (Component.default) {
            Component = Component.default
          }
          const data = require('./json/2612083915.json')
          return (
            <Component {...props} {...data} />
          )
        },
      },
    
      {
        path:'/',
        component: (props) => {
          let Component = require('/Users/kylemathews/programs/gary-mathews/pages/index.js')
          if (Component.default) {
            Component = Component.default
          }
          const data = require('./json/3466353006.json')
          return (
            <Component {...props} {...data} />
          )
        },
      },
    ]},]}
    module.exports = rootRoute