import { connect } from 'react-redux';

import Map from './Map';
import { withErrorBoundary } from '../../SystemComponent/ErrorBoundary';
import mapStateToProps from './mapStateToProps';

export default connect(mapStateToProps)(withErrorBoundary('Map')(Map));
