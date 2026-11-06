Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("@fluxerjs/core");
// src/.version.ts
const version = "0.1.0";
// src/members.ts
function isCommunicationDisabled(member) {
	return member.communicationDisabledUntil?.getTime() > Date.now();
}
exports.isCommunicationDisabled = isCommunicationDisabled;
exports.version = version;

//# sourceMappingURL=index.cjs.map