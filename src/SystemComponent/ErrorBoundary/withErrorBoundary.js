import React from 'react'

import ErrorBoundary from './ErrorBoundary'

const withErrorBoundary=(level)=>(BoundaredComponent)=>{
  return (props)=><ErrorBoundary level={level}><BoundaredComponent {...props}/></ErrorBoundary>
}

export default withErrorBoundary;
