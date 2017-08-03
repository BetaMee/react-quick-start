import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bundle extends React.Component {

  state = {
      // short for "module" but that's a keyword in js, so "mod"
    mod: null,
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null,
    });
    props.load((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod,
      });
    });
  }

  render() {
    if (!this.state.mod) {
      return false;
    }
    return this.props.children(this.state.mod);
  }
}


Bundle.propTypes = {
  load: PropTypes.func,
  children: PropTypes.func,
};

export default Bundle;
