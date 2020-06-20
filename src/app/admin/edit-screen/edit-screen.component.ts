import { Component, OnInit } from '@angular/core';
import { Process } from '../../process/process';
import { ProcessService } from '../../process/processService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-screen',
  templateUrl: './edit-screen.component.html',
  styleUrls: ['./edit-screen.component.css']
})
export class EditScreenComponent implements OnInit {
  process: Process;
  statuses = [{ id: 1, name: 'Đang hoạt động' }, {id: 2, name: 'Tạm ngừng'}]

  constructor(
    private processService: ProcessService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProcess();
  }

  getProcess(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.processService.getProcessById(id)
      .subscribe(process => this.process = process);
    console.log("lay id", this.process)
  }
  editPhase(phase) {
    console.log("da lay duoc phase", phase)
    this.router.navigateByUrl('home/edit-process/' + this.process.id + '/' + phase.phaseId);
  }
  onSave() {
    this.router.navigateByUrl('/home')
  }

}
