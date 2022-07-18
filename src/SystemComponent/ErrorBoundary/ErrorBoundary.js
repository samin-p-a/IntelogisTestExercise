import React, {Component} from 'react';

import ErrorIndicator from '../ErrorIndicator';


export default class ErrorBoundry extends Component{
  constructor(props) {
    super(props);
    this.state = { hasError: false, error:null };
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
  }

  render() {
    const { level='ErrorIndicator' } = this.props;
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return <ErrorIndicator error={this.state.error} level={level}/>;
    }

    return this.props.children;
  }
}
