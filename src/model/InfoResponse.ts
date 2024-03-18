export interface InfoResponse {
    message: string;
    results: Results;
    success: boolean;
   }
   
   export interface Results {
    basic_info:             BasicInfo;
    current_video_endpoint: CurrentVideoEndpoint;
    playability_status:     PlayabilityStatus;
    player_config:          PlayerConfig;
    player_overlays:        PlayerOverlays;
    storyboards:            Storyboards;
    streaming_data:         StreamingData;
    tabs:                   Tab[];
   }
   
   export interface BasicInfo {
    allow_ratings:              boolean;
    author:                     string;
    channel_id:                 string;
    description:                string;
    duration:                   number;
    id:                         string;
    is_crawlable:               boolean;
    is_family_safe:             boolean;
    is_live:                    boolean;
    is_live_content:            boolean;
    is_live_dvr_enabled:        boolean;
    is_low_latency_live_stream: boolean;
    is_owner_viewing:           boolean;
    is_post_live_dvr:           boolean;
    is_private:                 boolean;
    is_unlisted:                boolean;
    is_upcoming:                boolean;
    tags:                       string[];
    thumbnail:                  Thumbnail[];
    title:                      string;
    url_canonical:              string;
    view_count:                 number;
   }
   
   export interface Thumbnail {
    height: number;
    url:    string;
    width:  number;
   }
   
   export interface CurrentVideoEndpoint {
    metadata: Metadata;
    payload:  CurrentVideoEndpointPayload;
    type:     string;
   }
   
   export interface Metadata {
    api_url?: APIURL;
   }
   
   export enum APIURL {
    Browse = "/browse",
    Next = "/next",
    Player = "/player",
   }
   
   export interface CurrentVideoEndpointPayload {
    ustreamerConfig: string;
    videoId:         string;
   }
   
   export interface PlayabilityStatus {
    audio_only_playablility: AudioOnlyPlayablility;
    embeddable:              boolean;
    error_screen:            null;
    reason:                  string;
    status:                  string;
   }
   
   export interface AudioOnlyPlayablility {
    audio_only_availability: string;
    type:                    string;
   }
   
   export interface PlayerConfig {
    audio_config:            AudioConfig;
    media_common_config:     MediaCommonConfig;
    stream_selection_config: StreamSelectionConfig;
   }
   
   export interface AudioConfig {
    enable_per_format_loudness: boolean;
    loudness_db:                number;
    perceptual_loudness_db:     number;
   }
   
   export interface MediaCommonConfig {
    dynamic_readahead_config: DynamicReadaheadConfig;
   }
   
   export interface DynamicReadaheadConfig {
    max_read_ahead_media_time_ms: number;
    min_read_ahead_media_time_ms: number;
    read_ahead_growth_rate_ms:    number;
   }
   
   export interface StreamSelectionConfig {
    max_bitrate: string;
   }
   
   export interface PlayerOverlays {
    actions:               Action[];
    add_to_menu:           null;
    autoplay:              null;
    browser_media_session: BrowserMediaSession;
    decorated_player_bar:  null;
    end_screen:            null;
    fullscreen_engagement: null;
    share_button:          null;
    type:                  string;
   }
   
   export interface Action {
    like_status:   string;
    likes_allowed: boolean;
    target:        Target;
    type:          string;
   }
   
   export interface Target {
    video_id: string;
   }
   
   export interface BrowserMediaSession {
    album:      TitleClass;
    thumbnails: Thumbnail[];
    type:       string;
   }
   
   export interface TitleClass {
    runs: AlbumRun[];
    text: string;
   }
   
   export interface AlbumRun {
    bold:          boolean;
    italics:       boolean;
    strikethrough: boolean;
    text:          string;
   }
   
   export interface Storyboards {
    boards: Board[];
    type:   string;
   }
   
   export interface Board {
    columns:          number;
    interval:         number;
    rows:             number;
    storyboard_count: number;
    template_url:     string;
    thumbnail_count:  number;
    thumbnail_height: number;
    thumbnail_width:  number;
    type:             string;
   }
   
   export interface StreamingData {
    adaptive_formats:  Format[];
    dash_manifest_url: null;
    expires:           Date;
    formats:           Format[];
    hls_manifest_url:  null;
   }
   
   export interface Format {
    approx_duration_ms: number;
    audio_channels?:    number;
    audio_quality?:     string;
    audio_sample_rate:  number | null;
    average_bitrate?:   number;
    bitrate:            number;
    color_info?:        ColorInfo;
    content_length:     number | null;
    fps?:               number;
    has_audio:          boolean;
    has_text:           boolean;
    has_video:          boolean;
    height?:            number;
    index_range?:       Range;
    init_range?:        Range;
    is_descriptive?:    boolean;
    is_dubbed?:         boolean;
    is_original?:       boolean;
    is_type_otf:        boolean;
    itag:               number;
    language?:          null;
    last_modified:      Date;
    loudness_db?:       number;
    mime_type:          string;
    quality:            string;
    quality_label?:     string;
    signature_cipher:   string;
    width?:             number;
   }
   
   export interface ColorInfo {
    matrix_coefficients:      string;
    primaries:                string;
    transfer_characteristics: string;
   }
   
   export interface Range {
    end:   number;
    start: number;
   }
   
   export interface Tab {
    content:  TabContent | null;
    endpoint: AlbumEndpoint;
    selected: boolean;
    title:    string;
    type:     string;
   }
   
   export interface TabContent {
    content: PurpleContent;
    type:    string;
   }
   
   export interface PurpleContent {
    contents:    ContentElement[];
    is_infinite: boolean;
    playlist_id: string;
    title_text:  TitleText;
    type:        string;
   }
   
   export interface ContentElement {
    album?:          PurpleAlbum;
    artists?:        Artist[];
    author?:         string;
    badges?:         any[];
    duration?:       Duration;
    endpoint?:       ContentEndpoint;
    menu?:           Menu;
    playlist_video?: PlaylistVideo;
    selected?:       boolean;
    thumbnail?:      Thumbnail[];
    title?:          TitleClass;
    type:            string;
    video_id?:       string;
   }
   
   export interface PurpleAlbum {
    endpoint: AlbumEndpoint;
    id:       string;
    name:     string;
    year:     string;
   }
   
   export interface AlbumEndpoint {
    metadata: Metadata;
    payload:  PurplePayload;
    type:     string;
   }
   
   export interface PurplePayload {
    browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs;
    browseId?:                              string;
   }
   
   export interface BrowseEndpointContextSupportedConfigs {
    browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig;
   }
   
   export interface BrowseEndpointContextMusicConfig {
    pageType: string;
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
   
   export interface ContentEndpoint {
    metadata: Metadata;
    payload:  FluffyPayload;
    type:     string;
   }
   
   export interface FluffyPayload {
    params:                             string;
    videoId:                            string;
    watchEndpointMusicSupportedConfigs: PurpleWatchEndpointMusicSupportedConfigs;
   }
   
   export interface PurpleWatchEndpointMusicSupportedConfigs {
    watchEndpointMusicConfig: PurpleWatchEndpointMusicConfig;
   }
   
   export interface PurpleWatchEndpointMusicConfig {
    hasPersistentPlaylistPanel: boolean;
    musicVideoType:             string;
   }
   
   export interface Menu {
    items:             ItemElement[];
    label:             string;
    top_level_buttons: any[];
    type:              string;
   }
   
   export interface ItemElement {
    default_endpoint?:  DefaultEndpoint;
    endpoint?:          ItemEndpoint;
    icon_type:          string;
    text:               TitleClass | string;
    toggled_endpoint?:  ToggledEndpoint;
    toggled_icon_type?: string;
    toggled_text?:      TitleClass;
    type:               Type;
   }
   
   export interface DefaultEndpoint {
    metadata: TitleText;
    modal:    DefaultEndpointModal;
    payload:  DefaultEndpointPayload;
    type:     string;
   }
   
   export interface TitleText {
   }
   
   export interface DefaultEndpointModal {
    button:  ModalButton;
    content: TitleClass;
    title:   TitleClass;
    type:    string;
   }
   
   export interface ModalButton {
    endpoint:    ButtonEndpoint;
    is_disabled: boolean;
    text:        string;
    type:        string;
   }
   
   export interface ButtonEndpoint {
    metadata: TitleText;
    payload:  SignInEndpointClass;
    type:     string;
   }
   
   export interface SignInEndpointClass {
    hack: boolean;
   }
   
   export interface DefaultEndpointPayload {
    modal: PayloadModal;
   }
   
   export interface PayloadModal {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer;
   }
   
   export interface ModalWithTitleAndButtonRenderer {
    button:  ModalWithTitleAndButtonRendererButton;
    content: TextClass;
    title:   TextClass;
   }
   
   export interface ModalWithTitleAndButtonRendererButton {
    buttonRenderer: ButtonRenderer;
   }
   
   export interface ButtonRenderer {
    isDisabled:         boolean;
    navigationEndpoint: NavigationEndpoint;
    style:              string;
    text:               TextClass;
    trackingParams:     string;
   }
   
   export interface NavigationEndpoint {
    clickTrackingParams: string;
    signInEndpoint:      SignInEndpointClass;
   }
   
   export interface TextClass {
    runs: SuccessResponseTextRun[];
   }
   
   export interface SuccessResponseTextRun {
    text: string;
   }
   
   export interface ItemEndpoint {
    metadata: Metadata;
    modal?:   DefaultEndpointModal;
    payload:  TentacledPayload;
    type:     string;
   }
   
   export interface TentacledPayload {
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
    watchEndpointMusicSupportedConfigs?:    FluffyWatchEndpointMusicSupportedConfigs;
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
    successResponseText: TextClass;
    trackingParams:      string;
   }
   
   export interface LoggingContext {
    vssLoggingContext: VssLoggingContext;
   }
   
   export interface VssLoggingContext {
    serializedContextData: string;
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
   
   export interface FluffyWatchEndpointMusicSupportedConfigs {
    watchEndpointMusicConfig: FluffyWatchEndpointMusicConfig;
   }
   
   export interface FluffyWatchEndpointMusicConfig {
    musicVideoType: string;
   }
   
   export interface ToggledEndpoint {
    metadata: TitleText;
    payload:  TitleText;
    type:     string;
   }
   
   export enum Type {
    MenuNavigationItem = "MenuNavigationItem",
    MenuServiceItem = "MenuServiceItem",
    ToggleMenuServiceItem = "ToggleMenuServiceItem",
   }
   
   export interface PlaylistVideo {
    endpoint: PlaylistVideoEndpoint;
   }
   
   export interface PlaylistVideoEndpoint {
    metadata: Metadata;
    payload:  StickyPayload;
    type:     string;
   }
   
   export interface StickyPayload {
    params:     string;
    playlistId: string;
   }
   