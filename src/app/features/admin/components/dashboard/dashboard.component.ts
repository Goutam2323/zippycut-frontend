import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-admin-dashboard',
  template: `<app-card title="Platform Analytics"><canvas baseChart [data]="barData" [type]="'bar'"></canvas><p>Commission and booking KPIs summarized for rapid decision-making.</p></app-card>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardComponent {
  readonly barData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{ data: [112, 128, 156, 184], label: 'Bookings' }]
  };
}
