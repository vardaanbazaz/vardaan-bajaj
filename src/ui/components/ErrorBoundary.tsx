import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

// Catches render errors in the routed page. SiteLayout keys it by pathname, so navigating away resets it.
export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <section className="page-x pt-22 text-body">
          <p className="m-0">Something went wrong loading this page.</p>
          <p className="mt-3 mb-0">
            <Link to="/" className="inline-block py-2.5 text-link underline-inset hover:text-link-hover">
              Go to the home page
            </Link>
          </p>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
