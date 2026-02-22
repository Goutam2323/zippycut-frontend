import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-barber-dashboard',
  template: `<app-card title="Revenue Overview"><canvas baseChart [data]="lineChartData" [type]="'line'"></canvas></app-card>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarberDashboardComponent {
  readonly lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{ data: [3200, 4100, 3000, 4600, 5200, 5800, 6300], label: 'Revenue (₹)' }]
  };
}
