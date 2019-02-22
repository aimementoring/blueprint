import React, { PureComponent } from 'react';
import plyr from 'plyr';
import { capitalize } from '../../utils/helpers';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import { videoPlayerProps, videoPlayerDefaultProps } from './videoPlayerProps.ignore';
import styles from './videoPlayer.module.scss';

export default class VideoPlayer extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    ...videoPlayerProps,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    ...videoPlayerDefaultProps,
  };

  static getDerivedStateFromProps = nextProps => ({
    muted: nextProps.muted,
  });

  constructor(props) {
    super(props);

    this.player = null;
    this.elementRef = new React.createRef();

    this.state = {
      muted: null,
    };
  }

  componentDidMount() {
    const defaultOptions = Object.keys(videoPlayerDefaultProps).reduce(
      (acc, current) => ({
        ...acc,
        [current]: this.props[current],
      }),
      {},
    );

    const options = {
      ...defaultOptions,
      muted: this.state.muted,
    };

    const {
      className,
      onReady,
      onPlay,
      onPause,
      onEnd,
      onLoadedData,
      onSeeked,
      onTimeUpdate,
      onEnterFullscreen,
      onExitFullscreen,
      onCaptionsEnabled,
      onCaptionsDisabled,
      onVolumeChange,
    } = this.props;

    const node = this.elementRef.current;
    this.player = node && node.classList.contains(className) ? new plyr(node, options) : null;

    if (this.player) {
      this.player.on('play', onPlay);
      this.player.on('pause', onPause);
      this.player.on('ended', onEnd);
      this.player.on('loadeddata', onLoadedData);
      this.player.on('enterfullscreen', onEnterFullscreen);
      this.player.on('exitfullscreen', onExitFullscreen);
      this.player.on('ready', () => onReady(this.player));
      this.player.on('seeked', onSeeked(this.getCurrentTime()));
      this.player.on('timeupdate', onTimeUpdate(this.getCurrentTime()));
      this.player.on('captionsenabled', onCaptionsEnabled);
      this.player.on('captionsdisabled', onCaptionsDisabled);
      this.player.on('volumechange', () => {
        const { muted, volume } = this.player;
        onVolumeChange({ muted, volume });
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { videoId, muted, provider } = this.props;

    if (prevProps.muted !== muted) this.player.muted = muted;
    if (prevProps.videoId !== videoId) {
      if (videoId) this.updateVideoSource(videoId, provider);
    }
  }

  componentWillUnmount() {
    if (this.player) this.player.destroy();
  }

  getType = () => this.player && this.player.source && this.player.source.type;

  play = () => this.player && this.player.play();

  pause = () => this.player && this.player.pause();

  togglePlay = () => this.player && this.player.togglePlay();

  stop = () => this.player && this.player.stop();

  restart = () => this.player && this.player.restart();

  rewind = time => this.player && this.player.rewind(time);

  forward = time => this.player && this.player.forward(time);

  getCurrentTime = () => this.player && this.player.currentTime;

  setCurrentTime = currentTime => (this.player.currentTime = currentTime);

  getDuration = () => this.player && this.player.duration;

  getVolume = () => this.player && this.player.volume;

  isMuted = () => this.player && this.player.muted;

  isPaused = () => this.player && this.player.paused;

  toggleMute = () => this.player && this.player.toggleControls(this.player.muted);

  setMuted = (muted = true) => (this.player.muted = muted);

  increaseVolume = step => this.player && this.player.increaseVolume(step);

  decreaseVolume = step => this.player && this.player.decreaseVolume(step);

  setVolume = amount => (this.player.volume = amount);

  enterFullscreen = () => this.player && this.player.fullscreen.enter();

  exitFullscreen = () => this.player && this.player.fullscreen.exit();

  toggleFullscreen = () => this.player && this.player.fullscreen.toggle();

  updateVideoSource = (src, provider) => {
    this.player.source = {
      type: 'video',
      sources: [{ src, provider }],
    };
  };

  updateHtmlVideoSource = (src, type, title, poster, tracks) => {
    this.player.source = {
      type,
      title,
      sources: [
        {
          src,
          type: 'video/mp4',
        },
      ],
      poster,
      tracks,
    };
  };

  // For video support for plyr supported videos using videoId (Youtube and Vimeo for now).
  renderDefaultPlayer() {
    const { className, style, type, videoId } = this.props;
    return (
      <div
        className={className}
        style={style}
        data-plyr-provider={type}
        data-plyr-embed-id={videoId}
        ref={this.elementRef}
      />
    );
  }

  // For video support for source defined as link to those video files.
  renderVideoPlayer() {
    const { sources, url, preload, poster, className, captions } = this.props;

    const captionsMap = captions.map((source, index) => {
      const { key, kind, label, src, srclang, default: def, ...attributes } = source;
      return (
        <track
          key={key || index}
          kind={kind || 'captions'}
          label={label}
          src={src}
          srclang={srclang}
          default={def}
          {...attributes}
          ref={this.elementRef}
        />
      );
    });

    if (sources && Array.isArray(sources) && sources.length) {
      return (
        <video className={className} preload={preload} poster={poster} ref={this.elementRef}>
          {sources.map((source, index) => (
            <source
              key={index}
              src={source.src}
              type={source.type}
              size={source.size && source.size}
            />
          ))}
          {captionsMap}
        </video>
      );
    }

    return (
      <video
        className={className}
        src={url}
        preload={preload}
        poster={poster}
        ref={this.elementRef}
      >
        {captionsMap}
      </video>
    );
  }

  renderAudioPlayer() {
    const { sources, url, preload, className } = this.props;

    if (sources && Array.isArray(sources) && sources.length) {
      return (
        <audio className={className} preload={preload} ref={this.elementRef}>
          {sources.map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))}
        </audio>
      );
    }

    return <audio className={className} preload={preload} src={url} ref={this.elementRef} />;
  }

  render() {
    let { type } = this.props;
    const { theme, containerClassName } = this.props;
    if (['audio', 'video'].indexOf(type) === -1) type = 'default';

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={containerClassName}>{this[`render${capitalize(type)}Player`]()}</div>
      </div>
    );
  }
}
