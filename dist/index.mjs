import "@fluxerjs/core";
// src/.version.ts
const version = "0.1.0";
// src/members.ts
function isCommunicationDisabled(member) {
	return member.communicationDisabledUntil?.getTime() > Date.now();
}
export { isCommunicationDisabled, version };

//# sourceMappingURL=index.mjs.map