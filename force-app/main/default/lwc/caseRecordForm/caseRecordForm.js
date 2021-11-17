import { LightningElement } from 'lwc';
import CASE_NAME from '@salesforce/schema/Case';
import CASE_PRIORITY from '@salesforce/schema/Case.Priority';
import CASE_NUMBER from '@salesforce/schema/Case.CaseNumber';
import CASE_CONTACTNAME from '@salesforce/schema/Case.ContactId';
import CASE_ACCOUNTNAME from '@salesforce/schema/Case.AccountId';
import CASE_REASON from '@salesforce/schema/Case.Reason';
import CASE_WEBEMAIL from '@salesforce/schema/Case.SuppliedEmail';
import CASE_WEBNAME from '@salesforce/schema/Case.SuppliedName';
import CASE_COMPANY from '@salesforce/schema/Case.SuppliedCompany';
import CASE_PHONE from '@salesforce/schema/Case.SuppliedPhone';
import CASE_SUBJECT from '@salesforce/schema/Case.Subject';
import CASE_DESCRIPTION from '@salesforce/schema/Case.Description';

export default class CaseRecordForm extends LightningElement {
    
    objectName = CASE_NAME;
    fields = [CASE_PRIORITY, CASE_NUMBER, CASE_CONTACTNAME, CASE_ACCOUNTNAME, CASE_REASON, CASE_WEBEMAIL, CASE_WEBNAME, CASE_COMPANY, CASE_PHONE, CASE_SUBJECT, CASE_DESCRIPTION];
}