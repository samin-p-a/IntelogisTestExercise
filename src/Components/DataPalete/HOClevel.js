import { connect } from 'react-redux';
import {setDeliveryRequests} from '../../actions/api';
import {setSelectedDeliveryRequest} from '../../actions/map';

import DataPalete from './DataPalete';
import { withErrorBoundary } from '../../SystemComponent/ErrorBoundary';
import mapStateToProps from './mapStateToProps';

export default connect(mapStateToProps, {setDeliveryRequests,setSelectedDeliveryRequest,})(withErrorBoundary('DataPanel')(DataPalete));
