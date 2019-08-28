export class Message {
    text: string;
    typo: eType;

}
export enum eType {
    success = "success",
    warn = "warn",
    dange = "danger",
    info = "info",

}