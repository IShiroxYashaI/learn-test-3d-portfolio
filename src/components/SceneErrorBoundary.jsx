import { Component } from 'react';

// Renders nothing instead of crashing the whole page when an optional 3D asset fails to load
// (e.g. a model hosted on a third-party URL that is down).
export default class SceneErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error) {
        console.warn('Optional 3D asset failed to load:', error?.message);
    }

    render() {
        return this.state.hasError ? this.props.fallback ?? null : this.props.children;
    }
}
