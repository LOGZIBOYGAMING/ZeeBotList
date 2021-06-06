import {  Change } from '../../data/models/log';

export default class AuditLogger {
  getChanges(values: { old: {}, new: {} }, by: string) {
    let changes = { old: {}, new: {} };
    
    for (const key in values.old) {
      const changed = JSON.stringify(values.old[key]) !== JSON.stringify(values.new[key]);
      if (changed) {
        changes.old[key] = values.old[key];
        changes.new[key] = values.new[key];
      } 
    }
    return new Change(by, changes);
  }
}