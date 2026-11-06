import "@fluxerjs/core";
// src/.version.ts
const version = "0.1.0";
// src/members.ts
function isCommunicationDisabled(member) {
	return member.communicationDisabledUntil?.getTime() > Date.now();
}
// src/misc.ts
async function getOrFetch(manager, id) {
	return manager.get(id) ?? await manager.fetch(id);
}
export { getOrFetch, isCommunicationDisabled, version };

//# sourceMappingURL=index.mjs.map