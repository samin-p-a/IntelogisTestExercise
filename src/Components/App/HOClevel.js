import App from './App';
import { withErrorBoundary } from '../../SystemComponent/ErrorBoundary';

export default withErrorBoundary('App')(App);
