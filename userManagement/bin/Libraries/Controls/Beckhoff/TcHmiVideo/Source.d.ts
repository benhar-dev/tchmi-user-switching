/**
* TcHmiVideo
* -------------------------------------------------------------------
* (c) 2016 BECKHOFF Automation GmbH & Co. KG http://www.beckhoff.com
* -------------------------------------------------------------------
* @ignore
*/
declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiVideo extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Reference to the root dom element of the current control template as jquery object. */
                protected __elementTemplateRoot: JQuery;
                /** Reference to the dom element in current control template which handles the border style as jquery object. */
                protected __elementBorder: JQuery;
                /** Reference to the dom element in current control template which handles the focus style as jquery object. */
                protected __elementFocusBorder: JQuery;
                /** Reference to the underlying default html text video element as default html element object. */
                protected __elemVideo: HTMLVideoElement;
                /**
                * Internal reference to the attribute "tchmi-src-list"
                * @type {Array.<{VideoSource}>}
                */
                protected __srcList: TcHmiVideo.VideoSource[] | null | undefined;
                /**  Internal reference to the attribute "data-tchmi-controls"  */
                protected __controls: boolean | undefined | undefined;
                /**  Internal reference to the attribute "data-tchmi-volume". Value between 0 and 1. */
                protected __volume: number | undefined;
                /**  Internal reference to the attribute "data-tchmi-autoplay". */
                protected __autoplay: boolean | undefined;
                /**  Internal reference to the attribute "data-tchmi-muted". */
                protected __mute: boolean | undefined;
                /**  Internal reference to the attribute "data-tchmi-loop". */
                protected __loop: boolean | undefined;
                /**  Internal reference to the attribute "data-tchmi-poster". */
                protected __poster: string | null | undefined;
                /**  Internal reference to the attribute "data-tchmi-playbackrate". */
                protected __playbackrate: number | undefined;
                /** Returns the current duration of the video. */
                protected __duration: number;
                /** Returns the current duration of the video. */
                protected __currentTime: number;
                private __runtimeWidthNeededForHeight;
                private __runtimeHeightNeededForWidth;
                protected __onResizedEventDestroyEvent: DestroyFunction | null;
                /** Event handlers */
                protected __loadeddataHandler: (event: Event) => void;
                protected __volumechangeHandler: (event: Event) => void;
                protected __ratechangeHandler: (event: Event) => void;
                protected __durationchangeHandler: (event: Event) => void;
                protected __timeupdateHandler: (event: Event) => void;
                protected __endedHandler: (event: MediaStreamErrorEvent) => void;
                protected __objectResolvers: Map<string, {
                    resolver: Symbol.ObjectResolver;
                    watchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any>) => void;
                    watchDestroyer: DestroyFunction | null;
                }>;
                /**
                 * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                 * Call attribute processor functions here to initialize default values!
                 * @function __previnit
                 */
                __previnit(): void;
                /**
                * If raised, all attributes have been set to it's default or dom values.
                * @function __init
                */
                __init(): void;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                * @function
                */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                * @function
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                * @function
                */
                destroy(): void;
                protected __onResized(): (evt: EventProvider.Event, ctrl: System.TcHmiControl) => void;
                /**
                * Processes the current width and width unit.
                * @function
                */
                __processWidth(): void;
                /**
                * Processes the current height and height unit.
                * @function
                */
                __processHeight(): void;
                /**
                * Sets the value of the width mode attribute.
                * @function
                * @param    {string}    valueNew   -   The new width mode value..
                */
                setWidthMode(valueNew: SizeModeWithContent | null): void;
                /**
                * Sets the value of the height mode attribute.
                * @function
                * @param    {string}    valueNew   -   The new height mode value..
                */
                setHeightMode(valueNew: SizeModeWithContent | null): void;
                /**
                 * Returns the calculated width in pixel if self defined (not percent based) or based on the content control.
                 */
                __getContentWidth(): number | null;
                /**
                 * Returns the calculated height in pixel if self defined (not percent based) or based on the children.
                 */
                __getContentHeight(): number | null;
                /**
                 * Loads Video and Poster if access is now possible
                 */
                __processAccessConfig(): void;
                /**
                * Loads Video and Poster if access is now possible
                * @function
                */
                __processIsEnabled(): void;
                /**
                * Is raised if the browser have loaded the video data.
                * @function
                * @callback
                */
                private __onLoadedData;
                /**
                * Is raised if the browser had an error while loading the video data.
                * Handles the video and all source elements!
                * @function
                * @callback
                */
                protected __onError: (evt: ErrorEvent) => void;
                /**
                * Is raised if the volume of video is change.
                * @function
                * @callback
                */
                private __onVolumeChange;
                /**
                * Is raised if the duration of video is change.
                * @function
                * @callback
                */
                private __onDurationChange;
                /**
                * Is raised if the video ended playing.
                * @function
                * @callback
                */
                private __onEnded;
                /**
                * Is raised if the video started or paused playing.
                * @function
                * @callback
                */
                private __onPlayingChange;
                /**
                * Is raised if the speed of video is change.
                * @function
                * @callback
                */
                private __onRateChange;
                /**
                * Is raised if the time of video is updated.
                * @function
                * @callback
                */
                private __onTimeUpdate;
                /**
                * Returns a {number} value in seconds which says whether the video is long.
                * @function
                */
                getDuration(): number;
                /**
                * Returns a {boolean} value which says whether the video is ended or not.
                * @function
                */
                getIsEnded(): boolean;
                /**
                * Returns a {boolean} value which says whether the video is playing or not.
                * @function
                */
                getIsPlaying(): boolean;
                /**
                * Sets the srcList attribute to a new value.
                * @function
                * @param   {Array.<{VideoSource}>}    valueNew    -   The new value for the src attribute;
                * @typedef VideoSource
                */
                setSrcList(valueNew: TcHmiVideo.VideoSource[] | null): void;
                /**
                 * The watch callback for the srcList object resolver.
                 */
                protected __onResolverForSrcListWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiVideo.VideoSource[]>) => void;
                /**
                *
                * @function
                * @returns      {Array.<{VideSource}>}    The current value of the src attribute.
                */
                getSrcList(): TcHmiVideo.VideoSource[] | null | undefined;
                /**
                * Processes the current value of attribute src.
                * @function
                */
                protected __processSrcList(): void;
                /**
                * Starts the video.
                * @function
                */
                play(): void;
                /**
                * Paused the video.
                * @function
                */
                pause(): void;
                /**
                * Stops the video (paused video and reset the currentTime).
                * @function
                */
                stop(): void;
                /**
                * Skip backward (at the new value).
                * @function
                
                */
                skipBackward(newValue: number): void;
                /**
                * Skip forward (with the new value).
                * @function
                */
                skipForward(newValue: number): void;
                /**
                * Set the current time position to video in seconds.
                * @function
                */
                setCurrentTime(valueNew: number | null): void;
                /**
                * Returns a (Number) value in seconds which describes the current position in the video.
                * @function
                * @returns    {number}    The current attribute value in seconds.
                */
                getCurrentTime(): number;
                /**
                 * Processes the current time
                 * @function
                 */
                protected __processCurrentTime(): void;
                /**
                 * Sets the controls value and calls the associated process function (processControls).
                 * @function
                 * @param    {boolean}    valueNew    -   The new controls value.
                 *                                        Possible Values: true, false
                 */
                setControls(valueNew: boolean | null): void;
                /**
                * Returns the current controls value.
                * @function
                * @returns    {boolean}    The current attribute value.
                */
                getControls(): boolean | undefined;
                /**
                * Processes the current controls attribute.
                * @function
                */
                protected __processControls(): void;
                /**
                * Sets the volume value and calls the associated process function (processVolume).
                * @function
                * @param    {number}    valueNew    -   The new volume value between 0 and 1.
                */
                setVolume(valueNew: number | null): void;
                /**
                * Returns the current volume value.
                * @function
                * @returns    {number}    The current attribute volume value.
                */
                getVolume(): number | undefined;
                /**
                * Processes the current volume attribute.
                * @function
                */
                protected __processVolume(): void;
                /**
                  * Sets the autoplay value and calls the associated process function (processAutoplay).
                  * @function
                  * @param    {boolean}    valueNew    -   The new autoplay value.
                  * Possible Values: true, false
                */
                setAutoplay(valueNew: boolean | null): void;
                /**
                * Returns the current autoplay value.
                * @function
                * @returns    {boolean}    The current attribute autoplay value.
                */
                getAutoplay(): boolean | undefined;
                /**
                * Processes the current autoplay attribute.
                * @function
                */
                protected __processAutoplay(): void;
                /**
                * Sets the mute value and calls the associated process function (processMute).
                * @function
                * @param    {boolean}    valueNew    -   The new mute value.
                * Possible Values: true, false
                */
                setMute(valueNew: boolean | null): void;
                /**
                * Returns the current mute value.
                * @function
                * @returns    {boolean}    The current attribute mute value.
                */
                getMute(): boolean | undefined;
                /**
                * Processes the current mute attribute.
                * @function
                */
                protected __processMute(): void;
                /**
                * Sets the loop value and calls the associated process function (processLoop).
                * @function
                * @param    {boolean}    valueNew    -   The new loop value.
                * Possible Values: true, false
                */
                setLoop(valueNew: boolean | null): void;
                /**
                * Returns the current loop value.
                * @function
                * @returns    {boolean}    The current attribute loop value.
                */
                getLoop(): boolean | undefined;
                /**
                * Processes the current loop attribute.
                * @function
                */
                protected __processLoop(): void;
                /**
                * Sets the poster value and calls the associated process function (processPoster).
                * @function
                * @param    {string}    valueNew    -   The new poster value.
                */
                setPoster(valueNew: string | null): void;
                /**
                * Returns the current poster value.
                * @function
                * @returns    {string}    The current attribute poster value.
                */
                getPoster(): string | null | undefined;
                /**
                * Processes the current poster attribute.
                * @function
                */
                protected __processPoster(): void;
                /**
                * Sets the playbackrate value and calls the associated process function (processPlaybackrate).
                * @function
                * @param    {number}    valueNew    -   The new playbackrate value.
                */
                setPlaybackrate(valueNew: number | null): void;
                /**
                * Returns the current playbackrate value.
                * @function
                * @returns    {number}    The current attribute playbackrate value.
                */
                getPlaybackrate(): number | undefined;
                /**
                * Processes the current playbackrate attribute.
                * @function
                */
                protected __processPlaybackrate(): void;
                /**
                *
                * @function
                * @returns      {number}    The original width of the video.
                */
                getOriginalWidth(): number;
                /**
                *
                * @function
                * @returns      {number}    The original height of the video.
                */
                getOriginalHeight(): number;
            }
            module TcHmiVideo {
                interface VideoSource {
                    source: string;
                    type: string;
                }
            }
        }
    }
}