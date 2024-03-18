export interface LyricResponse {
    message: string;
    results: Results;
    success: boolean;
   }
   
   export interface Results {
    description:         Description;
    footer:              Description;
    max_collapsed_lines: number;
    max_expanded_lines:  number;
    type:                string;
   }
   
   export interface Description {
    runs: Run[];
    text: string;
   }
   
   export interface Run {
    bold:          boolean;
    italics:       boolean;
    strikethrough: boolean;
    text:          string;
   }
   