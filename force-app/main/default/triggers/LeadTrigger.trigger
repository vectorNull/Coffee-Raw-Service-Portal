trigger LeadTrigger on SOBJECT (before insert) {
    switch on Trigger.operationType {
        when BEFORE_INSERT {
            LeadTriggerHelper.checkForDuplicateEmails(Trigger.new);
        }
    }
}