export interface IMenu {
    _id:string,
    MenuName:string,
    MenuCode: string,
    MenuUrl: string,
    MenuOrder: number,
    DateAdded: Date,
    DateUpdated: Date,
    MenuType: string,
    Status:string,
    ParentMenuCode: string,
    GroupName:string
}
