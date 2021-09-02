import Vue from "vue";

export const stateMerge = function(state, value, propName, ignoreNull) {
	if (
		Object.prototype.toString.call(value) === "[object Object]" &&
		(!Boolean(propName) || state.hasOwnProperty(propName))
	) {
		const o = !Boolean(propName) ? state : state[propName];
		if (Boolean(o)) {
			for (var prop in value) {
				stateMerge(o, value[prop], prop, ignoreNull);
			}
			return;
		}
	}
	if (!ignoreNull || !Boolean(value)) Vue.set(state, propName, value);
};

export default stateMerge;
