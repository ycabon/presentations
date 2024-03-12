// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../chunks/tslib.es6 ../core/Accessor ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./OperationStatus ./UndoRedoError".split(" "),function(a,d,g,f,k,l,m,h,b,e){a.UndoRedoExecutionMethod=void 0;(function(c){c[c.Apply=0]="Apply";c[c.Undo=1]="Undo";c[c.Redo=2]="Redo"})(a.UndoRedoExecutionMethod||(a.UndoRedoExecutionMethod={}));a.UndoableOperation=class extends g{constructor(){super(...arguments);this.name=
"";this.tag=Symbol();this.status=b.OperationStatus.NeverApplied}get canUndo(){return this.status===b.OperationStatus.Applied}get canRedo(){return this.status===b.OperationStatus.Undone}async executeUndoRedoOperation(c){switch(c){case a.UndoRedoExecutionMethod.Apply:if(this.status!==b.OperationStatus.NeverApplied)throw new e.ApplyInvalidError;await this.apply();this.status=b.OperationStatus.Applied;break;case a.UndoRedoExecutionMethod.Undo:if(this.status!==b.OperationStatus.Applied)throw new e.UndoInvalidError;
await this.undo();this.status=b.OperationStatus.Undone;break;case a.UndoRedoExecutionMethod.Redo:if(this.status!==b.OperationStatus.Undone)throw new e.UndoInvalidError;await this.redo();this.status=b.OperationStatus.Applied}}};d.__decorate([f.property()],a.UndoableOperation.prototype,"name",void 0);d.__decorate([f.property()],a.UndoableOperation.prototype,"tag",void 0);a.UndoableOperation=d.__decorate([h.subclass("esri.undoredo.UndoableOperation")],a.UndoableOperation);Object.defineProperty(a,Symbol.toStringTag,
{value:"Module"})});