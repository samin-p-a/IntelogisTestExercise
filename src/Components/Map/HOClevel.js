import { connect } from 'react-redux';
import {setRoute} from '../../actions/api';


import Map from './Map';
import { withErrorBoundary } from '../../SystemComponent/ErrorBoundary';
import mapStateToProps from './mapStateToProps';

export default connect(mapStateToProps,{setRoute})(withErrorBoundary('Map')(Map));
