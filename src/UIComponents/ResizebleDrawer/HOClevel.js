import { connect } from 'react-redux';

import ResizebleDrawer from './ResizebleDrawer';
import { withErrorBoundary } from '../../SystemComponent/ErrorBoundary';
import mapStateToProps from './mapStateToProps';
import { setPaletteWidth } from '../../actions/ui';

export default connect(mapStateToProps, {setPaletteWidth})(withErrorBoundary('ResizebleDrawer')(ResizebleDrawer));
