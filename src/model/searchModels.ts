export interface RootObject {
    message: string;
    results: Results;
    success: boolean;
   }
   
   export interface Results {
    continuation_token: string;
    data:               Datum[];
   }
   
   export interface Datum {
    contents:     DatumContent[];
    continuation: string;
    title:        ToggledTextClass;
    type:         string;
   }
   
   export interface DatumContent {
    album:         Album;
    artists:       Artist[];
    duration:      Duration;
    fixed_columns: any[];
    flex_columns:  FlexColumn[];
    id:            string;
    item_type:     ItemTypeEnum;
    menu:          Menu;
    overlay:       Overlay;
    thumbnail:     Thumbnail;
    title:         string;
    type:          FluffyType;
   }
   
   export interface Album {
    endpoint: AlbumEndpoint;
    id:       string;
    name:     string;
   }
   
   export interface AlbumEndpoint {
    metadata: PurpleMetadata;
    payload:  PurplePayload;
    type:     EndpointType;
   }
   
   export interface PurpleMetadata {
    api_url?: APIURL;
   }
   
   export enum APIURL {
    Browse = "/browse",
    Player = "/player",
   }
   
   export interface PurplePayload {
    browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs;
    browseId:                              string;
   }
   
   export interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig;
   }
   
   export interface BrowseEndpointContextMusicConfig {
    pageType: PageType;
   }
   
   export enum PageType {
    MusicPageTypeAlbum = "MUSIC_PAGE_TYPE_ALBUM",
    MusicPageTypeArtist = "MUSIC_PAGE_TYPE_ARTIST",
   }
   
   export enum EndpointType {
    NavigationEndpoint = "NavigationEndpoint",
   }
   
   export interface Artist {
    channel_id: string;
    endpoint:   AlbumEndpoint;
    name:       string;
   }
   
   export interface Duration {
    seconds: number;
    text:    string;
   }
   
   export interface FlexColumn {
    display_priority: DisplayPriority;
    title:            FlexColumnTitle;
    type:             FlexColumnType;
   }
   
   export enum DisplayPriority {
    MusicResponsiveListItemColumnDisplayPriorityHigh = "MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_HIGH",
   }
   
   export interface FlexColumnTitle {
    endpoint?: TitleEndpoint;
    runs:      ToggledTextRun[];
    text:      string;
   }
   
   export interface TitleEndpoint {
    metadata: PurpleMetadata;
    payload:  FluffyPayload;
    type:     EndpointType;
   }
   
   export interface FluffyPayload {
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs;
    browseId?:                              string;
    videoId?:                               string;
    watchEndpointMusicSupportedConfigs?:    WatchEndpointMusicSupportedConfigs;
   }
   
   export interface WatchEndpointMusicSupportedConfigs {
    watchEndpointMusicConfig: WatchEndpointMusicConfig;
   }
   
   export interface WatchEndpointMusicConfig {
    musicVideoType: MusicVideoType;
   }
   
   export enum MusicVideoType {
    MusicVideoTypeAtv = "MUSIC_VIDEO_TYPE_ATV",
   }
   
   export interface ToggledTextRun {
    bold:          boolean;
    endpoint?:     TitleEndpoint;
    italics:       boolean;
    strikethrough: boolean;
    text:          string;
   }
   
   export enum FlexColumnType {
    MusicResponsiveListItemFlexColumn = "MusicResponsiveListItemFlexColumn",
   }
   
   export enum ItemTypeEnum {
    Song = "song",
   }
   
   export interface Menu {
    items:             ItemElement[];
    label:             Label;
    top_level_buttons: any[];
    type:              MenuType;
   }
   
   export interface ItemElement {
    default_endpoint?:  DefaultEndpoint;
    endpoint?:          ItemEndpoint;
    icon_type:          IconType;
    text:               ToggledTextClass | PurpleText;
    toggled_endpoint?:  ToggledEndpoint;
    toggled_icon_type?: ToggledIconType;
    toggled_text?:      ToggledTextClass;
    type:               ItemType;
   }
   
   export interface DefaultEndpoint {
    metadata: PayloadClass;
    modal:    DefaultEndpointModal;
    payload:  DefaultEndpointPayload;
    type:     EndpointType;
   }
   
   export interface PayloadClass {
   }
   
   export interface DefaultEndpointModal {
    button:  ModalButton;
    content: ToggledTextClass;
    title:   ToggledTextClass;
    type:    ModalType;
   }
   
   export interface ModalButton {
    endpoint:    ButtonEndpoint;
    is_disabled: boolean;
    text:        ButtonText;
    type:        ButtonType;
   }
   
   export interface ButtonEndpoint {
    metadata: PayloadClass;
    payload:  SignInEndpointClass;
    type:     EndpointType;
   }
   
   export interface SignInEndpointClass {
    hack: boolean;
   }
   
   export enum ButtonText {
    ImproveRecommendationsAndSaveMusicAfterSigningIn = "Improve recommendations and save music after signing in",
    LikeThisSong = "Like this song",
    MakePlaylistsAndShareThemAfterSigningIn = "Make playlists and share them after signing in",
    SaveThisForLater = "Save this for later",
    SignIn = "Sign in",
    SongAddedToQueue = "Song added to queue",
    SongWillPlayNext = "Song will play next",
   }
   
   export enum ButtonType {
    Button = "Button",
   }
   
   export interface ToggledTextClass {
    runs: ToggledTextRun[];
    text: TitleText;
   }
   
   export enum TitleText {
    AddToLikedSongs = "Add to liked songs",
    ImproveRecommendationsAndSaveMusicAfterSigningIn = "Improve recommendations and save music after signing in",
    LikeThisSong = "Like this song",
    MakePlaylistsAndShareThemAfterSigningIn = "Make playlists and share them after signing in",
    RemoveFromLikedSongs = "Remove from liked songs",
    SaveThisForLater = "Save this for later",
    Songs = "Songs",
   }
   
   export enum ModalType {
    ModalWithTitleAndButton = "ModalWithTitleAndButton",
   }
   
   export interface DefaultEndpointPayload {
    modal: PayloadModal;
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
    style:              Style;
    text:               TitleClass;
    trackingParams:     string;
   }
   
   export interface NavigationEndpoint {
    clickTrackingParams: string;
    signInEndpoint:      SignInEndpointClass;
   }
   
   export enum Style {
    StyleBlueText = "STYLE_BLUE_TEXT",
   }
   
   export interface TitleClass {
    runs: SuccessResponseTextRun[];
   }
   
   export interface SuccessResponseTextRun {
    text: ButtonText;
   }
   
   export interface ItemEndpoint {
    metadata: PurpleMetadata;
    modal?:   DefaultEndpointModal;
    payload:  TentacledPayload;
    type:     EndpointType;
   }
   
   export interface TentacledPayload {
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs;
    browseId?:                              string;
    commands?:                              Command[];
    loggingContext?:                        LoggingContext;
    modal?:                                 PayloadModal;
    params?:                                Params;
    playlistId?:                            string;
    queueInsertPosition?:                   QueueInsertPosition;
    queueTarget?:                           QueueTarget;
    serializedShareEntity?:                 string;
    sharePanelType?:                        SharePanelType;
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
   
   export interface LoggingContext {
    vssLoggingContext: VssLoggingContext;
   }
   
   export interface VssLoggingContext {
    serializedContextData: string;
   }
   
   export enum Params {
    WAEB = "wAEB",
   }
   
   export enum QueueInsertPosition {
    InsertAfterCurrentVideo = "INSERT_AFTER_CURRENT_VIDEO",
    InsertAtEnd = "INSERT_AT_END",
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
   
   export enum SharePanelType {
    SharePanelTypeUnifiedSharePanel = "SHARE_PANEL_TYPE_UNIFIED_SHARE_PANEL",
   }
   
   export enum IconType {
    AddToPlaylist = "ADD_TO_PLAYLIST",
    AddToRemoteQueue = "ADD_TO_REMOTE_QUEUE",
    Album = "ALBUM",
    Artist = "ARTIST",
    Favorite = "FAVORITE",
    Mix = "MIX",
    QueuePlayNext = "QUEUE_PLAY_NEXT",
    Share = "SHARE",
   }
   
   export enum PurpleText {
    AddToQueue = "Add to queue",
    GoToAlbum = "Go to album",
    GoToArtist = "Go to artist",
    PlayNext = "Play next",
    SaveToPlaylist = "Save to playlist",
    Share = "Share",
    StartRadio = "Start radio",
   }
   
   export interface ToggledEndpoint {
    metadata: PayloadClass;
    payload:  PayloadClass;
    type:     EndpointType;
   }
   
   export enum ToggledIconType {
    Unfavorite = "UNFAVORITE",
   }
   
   export enum ItemType {
    MenuNavigationItem = "MenuNavigationItem",
    MenuServiceItem = "MenuServiceItem",
    ToggleMenuServiceItem = "ToggleMenuServiceItem",
   }
   
   export enum Label {
    ActionMenu = "Action menu",
   }
   
   export enum MenuType {
    Menu = "Menu",
   }
   
   export interface Overlay {
    content:          OverlayContent;
    content_position: ContentPosition;
    display_style:    DisplayStyle;
    type:             OverlayType;
   }
   
   export interface OverlayContent {
    endpoint:        ContentEndpoint;
    icon_color:      number;
    pause_icon_type: PauseIconType;
    pause_label:     string;
    play_icon_type:  PlayIconType;
    play_label:      string;
    type:            PurpleType;
   }
   
   export interface ContentEndpoint {
    metadata: PurpleMetadata;
    payload:  StickyPayload;
    type:     EndpointType;
   }
   
   export interface StickyPayload {
    videoId:                            string;
    watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs;
   }
   
   export enum PauseIconType {
    Pause = "PAUSE",
   }
   
   export enum PlayIconType {
    PlayArrow = "PLAY_ARROW",
   }
   
   export enum PurpleType {
    MusicPlayButton = "MusicPlayButton",
   }
   
   export enum ContentPosition {
    MusicItemThumbnailOverlayContentPositionCentered = "MUSIC_ITEM_THUMBNAIL_OVERLAY_CONTENT_POSITION_CENTERED",
   }
   
   export enum DisplayStyle {
    MusicItemThumbnailOverlayDisplayStylePersistent = "MUSIC_ITEM_THUMBNAIL_OVERLAY_DISPLAY_STYLE_PERSISTENT",
   }
   
   export enum OverlayType {
    MusicItemThumbnailOverlay = "MusicItemThumbnailOverlay",
   }
   
   export interface Thumbnail {
    contents: ThumbnailContent[];
    type:     ThumbnailType;
   }
   
   export interface ThumbnailContent {
    height: number;
    url:    string;
    width:  number;
   }
   
   export enum ThumbnailType {
    MusicThumbnail = "MusicThumbnail",
   }
   
   export enum FluffyType {
    MusicResponsiveListItem = "MusicResponsiveListItem",
   }
   