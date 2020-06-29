import { Component, OnInit } from '@angular/core';
import { Process } from '../../models/process';
import { ProcessService } from '../../services/processService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-screen',
  templateUrl: './edit-screen.component.html',
  styleUrls: ['./edit-screen.component.css']
})
export class EditScreenComponent implements OnInit {
  process: Process;
  statuses = [{ id: 1, name: 'Đang hoạt động' }, { id: 2, name: 'Tạm ngừng' }]

  constructor(
    private processService: ProcessService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProcess();
  }

  getProcess() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.processService.getById(id)
      .subscribe(
        process =>
        
          this.process = process,
          
        );

  }
  getAll() {
    this.processService.getAllProcess().subscribe();
  }
  editPhase(phase) {
    this.router.navigateByUrl('home/edit-process/' + this.process.id + '/' + phase.id);
  }
  onSave() {
   
    this.processService.updateProcess(this.process as Process)
      .subscribe(p => {
        console.log("sửa process", p)
      })
    
    this.router.navigateByUrl('/home')
   
  }
  deletePhase(index) {
    this.process.phase.splice(index, 1);
  }

}
