import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';
import DocsArticle from './DocsArticle';

export default class DocsPattern extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: undefined // Vanilla
    };
  }

  componentDidMount() {
    this.setState({
      theme: this._getTheme(window.location.pathname)
    });
  }

  _getTheme(url) {
    const acceptedThemes = ['hpe', 'hpinc', 'aruba'];
    const pathArray = url.split('/');
    let currTheme;

    acceptedThemes.forEach((theme) => {
      if (pathArray[1] === theme && !currTheme) currTheme = theme;
    });
    
    return currTheme;
  };

  _getBranchUrl(theme, githubUrl) {
    if (theme)
      return `${githubUrl}/tree/${theme}-theme`;
    else
      return githubUrl;
  }

  render() {
    const { title, exampleUrl, githubUrl } = this.props;
    const { theme } = this.state;
    const branchUrl = this._getBranchUrl(theme, githubUrl);
    const secondaryTitle = (
      <Anchor href={branchUrl} icon={<GithubIcon />} />
    );

    return (
      <DocsArticle 
        title={title} 
        secondaryTitle={secondaryTitle} 
        action={
          <Button primary={true} 
            href={`https://${exampleUrl}-${theme || 'vanilla'}.herokuapp.com/`}
            target='_blank'
            label='Examples' />
        }>
        {this.props.children}
      </DocsArticle>
    );
  }
};

