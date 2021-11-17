public with sharing class LeadTriggerHelper {
    
    public static void checkForDuplicateEmails(List<Lead> newLeads) {
        Set<String> newEmails = new Set<String>();
        for (Lead l : newLeads) {
            if(l.Email != null) {
                newEmails.add(l.Email);
            }
        }

        List<Lead> existingLeads = [SELECT Id, Email FROM Lead WHERE Email in :newEmails];

        Set<String> existingLeads = new Set<String>();
        for(Lead l : existingLeads) {
            existingLeads.add(l.Email)
        }

        for(Lead l : newLeads) {
            if (existingLeads.contains(l.Email)) {
                c.Email.addError('Cannot create lead because the email provide is already associated with an exisitng lead');
            }
        }
    }
}
