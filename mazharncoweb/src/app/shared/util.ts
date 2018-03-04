
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class Util {
    constructor(private snackBar: MatSnackBar) { }

    openSnackBar(message: string, action: string): void {
        let dur = action == ("Error" || "Pending") ? -1 : 2000;
        this.snackBar.open(message, action, {
            duration: dur,
        });
    }

}
