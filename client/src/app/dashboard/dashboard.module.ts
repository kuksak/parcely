import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {DashboardRoutes} from "./dashboard.routing.module";
import {DashboardComponent} from "./dashboard.component";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable
} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        RouterModule.forChild(DashboardRoutes),
        MatCard,
        MatCardContent,
        MatCardTitle,
        MatTable,
        MatColumnDef,
        MatHeaderCell,
        MatCell,
        MatHeaderRow,
        MatHeaderRowDef,
        MatRow,
        MatRowDef,
        MatHeaderCellDef,
        MatCellDef,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
    ]
})
export class DashboardModule {

}
