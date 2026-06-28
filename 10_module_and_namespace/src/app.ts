// namespace 를 위해 아래와 같이 /// 이후 작성
/// <reference path="models/drag-drop.ts" />
/// <reference path="models/project.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="util/validation.ts" />
/// <reference path="decorators/autobind.ts" />
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

namespace App {
    new ProjectInput();
    new ProjectList("active");
    new ProjectList("finished");
}