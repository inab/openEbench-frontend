"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const testing_1 = require("@angular-devkit/schematics/testing");
const path_1 = require("path");
const testing_2 = require("../../utils/testing");
const test_1 = require("@schematics/angular/utility/test");
const schema_1 = require("@schematics/angular/component/schema");
// tslint:disable:max-line-length
xdescribe('Component Schematic', () => {
    const collectionPath = path_1.join(__dirname, '../collection.json');
    const defaultOptions = {
        name: 'foo',
        path: 'src/app',
        inlineStyle: false,
        inlineTemplate: false,
        changeDetection: schema_1.ChangeDetection.Default,
        module: undefined,
        export: false,
        project: 'bar',
    };
    const schematicRunner = new testing_1.SchematicTestRunner('schematics', collectionPath);
    const projectPath = testing_2.getTestProjectPath();
    let appTree;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        appTree = yield testing_2.createWorkspace(schematicRunner, appTree);
    }));
    it('should create a component', () => __awaiter(void 0, void 0, void 0, function* () {
        const tree = yield schematicRunner
            .runSchematicAsync('wrapper', Object.assign({}, defaultOptions), appTree)
            .toPromise();
        const files = tree.files;
        expect(files.indexOf(`${projectPath}/src/app/foo/foo.component.css`)).toBeGreaterThanOrEqual(0);
        expect(files.indexOf(`${projectPath}/src/app/foo/foo.component.html`)).toBeGreaterThanOrEqual(0);
        expect(files.indexOf(`${projectPath}/src/app/foo/foo.component.spec.ts`)).toBeGreaterThanOrEqual(0);
        expect(files.indexOf(`${projectPath}/src/app/foo/foo.component.ts`)).toBeGreaterThanOrEqual(0);
        const moduleContent = test_1.getFileContent(tree, `${projectPath}/src/app/app.module.ts`);
        expect(moduleContent).toMatch(/import.*Foo.*from '.\/foo\/foo.component'/);
        expect(moduleContent).toMatch(/declarations:\s*\[[^\]]+?,\r?\n\s+FooComponent\r?\n/m);
    }));
    xit('should add wrapper to FormlyModule config', () => __awaiter(void 0, void 0, void 0, function* () {
        const tree = yield schematicRunner
            .runSchematicAsync('wrapper', Object.assign({}, defaultOptions), appTree)
            .toPromise();
        const moduleContent = test_1.getFileContent(tree, `${projectPath}/src/app/app.module.ts`);
        expect(moduleContent).toContain(`wrappers: [
      { name: 'foo', component: FooWrapperComponent },
    ],`);
    }));
});
//# sourceMappingURL=index.spec.js.map