export interface SearchSuggestionResponse {
    message: string;
    results: Result[];
    success: boolean;
   }
   
   export interface Result {
    contents: ResultContent[];
    type:     string;
   }
   
   export interface ResultContent {
    authors?:       Author[];
    endpoint:       PurpleEndpoint;
    fixed_columns?: any[];
    flex_columns?:  FlexColumn[];
    icon_type?:     string;
    id?:            string;
    item_type?:     string;
    menu?:          Menu;
    overlay?:       Overlay;
    suggestion?:    Suggestion;
    thumbnail?:     Thumbnail;
    title?:         string;
    type:           string;
    views?:         string;
   }
   
   export interface Author {
    channel_id: string;
    endpoint:   AuthorEndpoint;
    name:       string;
   }
   
   export interface AuthorEndpoint {
    metadata: PurpleMetadata;
    payload:  PurplePayload;
    type:     string;
   }
   
   export interface PurpleMetadata {
    api_url?: APIURL;
   }
   
   export enum APIURL {
    Browse = "/browse",
    Player = "/player",
    Search = "/search",
   }
   
   export interface PurplePayload {
    browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs;
    browseId:                              string;
   }
   
   export interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig;
   }
   
   export interface BrowseEndpointContextMusicConfig {
    pageType: string;
   }
   
   export interface PurpleEndpoint {
    metadata: PurpleMetadata;
    payload:  FluffyPayload;
    type:     string;
   }
   
   export interface FluffyPayload {
    query?:                              string;
    videoId?:                            string;
    watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs;
   }
   
   export interface WatchEndpointMusicSupportedConfigs {
    watchEndpointMusicConfig: WatchEndpointMusicConfig;
   }
   
   export interface WatchEndpointMusicConfig {
    musicVideoType: string;
   }
   
   export interface FlexColumn {
    display_priority: string;
    title:            Title;
    type:             string;
   }
   
   export interface Title {
    endpoint?: TitleEndpoint;
    runs?:     SuggestionRun[];
    text?:     string;
   }
   
   export interface TitleEndpoint {
    metadata: PurpleMetadata;
    payload:  TentacledPayload;
    type:     string;
   }
   
   export interface TentacledPayload {
    videoId:                            string;
    watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs;
   }
   
   export interface SuggestionRun {
    bold:          boolean;
    endpoint?:     RunEndpoint;
    italics:       boolean;
    strikethrough: boolean;
    text:          string;
   }
   
   export interface RunEndpoint {
    metadata: PurpleMetadata;
    payload:  StickyPayload;
    type:     string;
   }
   
   export interface StickyPayload {
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs;
    browseId?:                              string;
    videoId?:                               string;
    watchEndpointMusicSupportedConfigs?:    WatchEndpointMusicSupportedConfigs;
   }
   
   export interface Menu {
    items:             ItemElement[];
    label:             string;
    top_level_buttons: TopLevelButton[];
    type:              string;
   }
   
   export interface ItemElement {
    endpoint:  ItemEndpoint;
    icon_type: string;
    text:      string;
    type:      string;
   }
   
   export interface ItemEndpoint {
    metadata: PurpleMetadata;
    modal?:   EndpointModal;
    payload:  IndigoPayload;
    type:     string;
   }
   
   export interface EndpointModal {
    button:  ModalButton;
    content: Suggestion;
    title:   Suggestion;
    type:    string;
   }
   
   export interface ModalButton {
    endpoint:    ButtonEndpoint;
    is_disabled: boolean;
    text:        string;
    type:        string;
   }
   
   export interface ButtonEndpoint {
    metadata: FluffyMetadata;
    payload:  SignInEndpointClass;
    type:     string;
   }
   
   export interface FluffyMetadata {
   }
   
   export interface SignInEndpointClass {
    hack: boolean;
   }
   
   export interface Suggestion {
    runs: SuggestionRun[];
    text: string;
   }
   
   export interface IndigoPayload {
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs;
    browseId?:                              string;
    commands?:                              Command[];
    loggingContext?:                        LoggingContext;
    modal?:                                 PayloadModal;
    params?:                                string;
    playlistId?:                            string;
    queueInsertPosition?:                   string;
    queueTarget?:                           QueueTarget;
    serializedShareEntity?:                 string;
    sharePanelType?:                        string;
    videoId?:                               string;
    watchEndpointMusicSupportedConfigs?:    WatchEndpointMusicSupportedConfigs;
   }
   
   export interface Command {
    addToToastAction:    AddToToastAction;
    clickTrackingParams: string;
   }
   
   export interface AddToToastAction {
    item: AddToToastActionItem;
   }
   
   export interface AddToToastActionItem {
    notificationTextRenderer: NotificationTextRenderer;
   }
   
   export interface NotificationTextRenderer {
    successResponseText: TitleClass;
    trackingParams:      string;
   }
   
   export interface TitleClass {
    runs: TextRun[];
   }
   
   export interface TextRun {
    text: string;
   }
   
   export interface LoggingContext {
    vssLoggingContext: VssLoggingContext;
   }
   
   export interface VssLoggingContext {
    serializedContextData: string;
   }
   
   export interface PayloadModal {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer;
   }
   
   export interface ModalWithTitleAndButtonRenderer {
    button:  ModalWithTitleAndButtonRendererButton;
    content: TitleClass;
    title:   TitleClass;
   }
   
   export interface ModalWithTitleAndButtonRendererButton {
    buttonRenderer: ButtonRenderer;
   }
   
   export interface ButtonRenderer {
    isDisabled:         boolean;
    navigationEndpoint: NavigationEndpoint;
    style:              string;
    text:               TitleClass;
    trackingParams:     string;
   }
   
   export interface NavigationEndpoint {
    clickTrackingParams: string;
    signInEndpoint:      SignInEndpointClass;
   }
   
   export interface QueueTarget {
    onEmptyQueue: OnEmptyQueue;
    videoId:      string;
   }
   
   export interface OnEmptyQueue {
    clickTrackingParams: string;
    watchEndpoint:       WatchEndpoint;
   }
   
   export interface WatchEndpoint {
    videoId: string;
   }
   
   export interface TopLevelButton {
    like_status:   string;
    likes_allowed: boolean;
    target:        Target;
    type:          string;
   }
   
   export interface Target {
    video_id: string;
   }
   
   export interface Overlay {
    content:          OverlayContent;
    content_position: string;
    display_style:    string;
    type:             string;
   }
   
   export interface OverlayContent {
    endpoint:        TitleEndpoint;
    icon_color:      number;
    pause_icon_type: string;
    pause_label:     string;
    play_icon_type:  string;
    play_label:      string;
    type:            string;
   }
   
   export interface Thumbnail {
    contents: ThumbnailContent[];
    type:     string;
   }
   
   export interface ThumbnailContent {
    height: number;
    url:    string;
    width:  number;
   }
   