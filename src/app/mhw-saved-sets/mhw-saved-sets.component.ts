import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import CurSet from "../interface/app/cur-set.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MhwStorageService} from "../service/mhw-storage.service";
import SavedSet from "../interface/app/saved-set.interface";

@Component({
  selector: "mhw-saved-sets",
  templateUrl: "./mhw-saved-sets.component.html"
})
export class MhwSavedSetsComponent implements OnInit {
  public savedSets: SavedSet[] = [];
  public saveModalOpen = false;
  public duplicateSetName = false;

  public saveForm: FormGroup = this.fb.group({
    name: ["", Validators.required],
    description: [null]
  });

  @Input() open: boolean;
  @Input() curSet: CurSet;
  @Output() closeResponse: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loadSets();
  }

  public closeLayer() {
    if (this.saveModalOpen) {
      this.saveModalOpen = false;
    } else {
      this.closeResponse.emit(false);
    }
  }

  public saveSet() {
    if (this.saveForm.invalid) {
      return;
    }

    let id = 0;

    if (0 < this.savedSets.length) {
      id = this.savedSets[this.savedSets.length - 1].id + 1;
    }

    const { name, description } = this.saveForm.controls;
    const newSet: SavedSet = {
      id,
      name: name.value,
      description: description.value,
      set: this.curSet
    };

    if (!this.savedSets.find((set) => set.name === newSet.name)) {
      this.savedSets.push(newSet);

      const jsonStr = JSON.stringify(this.savedSets);
      MhwStorageService.setItem("my-mhw-sets", jsonStr);
      this.saveModalOpen = false;
      this.duplicateSetName = false;
    } else {
      this.duplicateSetName = true;
    }
  }

  public deleteSet(set: SavedSet) {
    this.savedSets = this.savedSets.filter((setItem) => setItem.id !== set.id);

    if (0 < this.savedSets.length) {
      const jsonStr = JSON.stringify(this.savedSets);
      MhwStorageService.setItem("my-mhw-sets", jsonStr);
    } else {
      MhwStorageService.removeItem("my-mhw-sets");
    }
  }

  private loadSets() {
    const mySets = MhwStorageService.getItem("my-mhw-sets");

    if (null !== mySets) {
      this.savedSets = JSON.parse(mySets);
    }
  }

}
