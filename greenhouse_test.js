
Feature('Application To do List');

Scenario('Create New List', (I) => {
  I.amOnPage('');
  I.wait(5);
  I.click('//*[@id="button-1023-btnIconEl"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1041-inputEl"]','List 1')
  I.wait(3);
  I.pressKey('\n');
 
});

Scenario('Create Many New List', (I) => {
  I.amOnPage('');
  I.wait(5);
  I.click('//*[@id="button-1023-btnIconEl"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1041-inputEl"]','List 1')
  I.wait(3);
  I.pressKey('\n');
  I.click('//*[@id="button-1023-btnIconEl"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1041-inputEl"]','List 2')
  I.wait(3);
  I.pressKey('\n');
  I.click('//*[@id="button-1023-btnIconEl"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1041-inputEl"]','List 3')
  I.wait(3);
  I.pressKey('\n');
 
});

Scenario('Delete List', (I) => {
  I.amOnPage('');
  I.wait(5);
  I.click('//*[@id="button-1023-btnIconEl"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1041-inputEl"]','List 1')
  I.wait(3);
  I.pressKey('\n');
  I.click('//*[@id="button-1023-btnIconEl"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1041-inputEl"]','List 2')
  I.wait(3);
  I.pressKey('\n');
  I.click('//*[@id="delete-list-btn-btnIconEl"]')
  I.wait(2);
  I.click('//*[@id="button-1006-btnInnerEl"]')
  I.wait(2);
});

Scenario('Create New Folder', (I) => {
  I.amOnPage('');
  I.wait(5);
  I.click('//*[@id="button-1024-btnIconEl"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1041-inputEl"]','Folder 1')
  I.wait(3);
  I.pressKey('\n');
});

Scenario('Delete Folder', (I) => {
  I.amOnPage('');
  I.wait(5);
  I.click('//*[@id="button-1024-btnIconEl"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1041-inputEl"]','Folder 1')
  I.wait(3);
  I.pressKey('\n');
  I.click('//*[@id="delete-folder-btn-btnIconEl"]')
  I.wait(2);
  I.click('//*[@id="button-1006-btnInnerEl"]')
  I.wait(2);
});

Scenario('Create New List in New Folder', (I) => {
  I.amOnPage('');
  I.wait(5);
  I.click('//*[@id="button-1024-btnIconEl"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1041-inputEl"]','Folder 1')
  I.wait(3);
  I.pressKey('\n');
  I.click('//*[@id="button-1023-btnIconEl"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1041-inputEl"]','List 1')
  I.wait(3);
  I.pressKey('\n');
 
});


Scenario('Create New Task', (I) => {
  I.amOnPage('');
  I.wait(5);
  I.click('//*[@id="splitbutton-1011"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1037-inputEl"]','Test 1')
  I.wait(5);
  I.pressKey('\n');
 
});

Scenario('Create Many New Task', (I) => {
  I.amOnPage('');
  I.wait(7);
  I.click('//*[@id="splitbutton-1011"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1037-inputEl"]','Test 1')
  I.wait(5);
  I.pressKey('\n');
  I.fillField('//*[@id="textfield-1037-inputEl"]','Test 2')
  I.wait(5);
  I.pressKey('\n');
  I.fillField('//*[@id="textfield-1037-inputEl"]','Test 3')
  I.wait(5);
  //date picker
  I.click('//*[@id="datefield-1039-trigger-picker"]');
  I.wait(2);
  I.click('//*[@id="datefield-1039-picker-cell-22"]');
  I.wait(3);
  I.pressKey('\n');
  I.fillField('//*[@id="textfield-1037-inputEl"]','Test 4')
  I.wait(5);
  //date picker
  I.click('//*[@id="datefield-1039-trigger-picker"]');
  I.wait(2);
  I.click('//*[@id="datefield-1039-picker-cell-26"]');
  I.wait(3);
  I.pressKey('\n');
 
});


Scenario('Edit Task', (I) => {
  I.amOnPage('');
  I.wait(7);
  I.click('//*[@id="splitbutton-1011"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1037-inputEl"]','Test 1')
  I.wait(5);
  I.pressKey('\n');
  I.click('//*[@id="gridview-1027-record-4"]/tbody/tr[2]')
  I.wait(3);
  I.click('//*[@id="gridview-1027-record-107"]/tbody/tr[2]/td[6]');
  I.wait(3);
  I.fillField('//*[@id="textfield-1046-inputEl"]', 'Edit Test 1')
  I.wait(3)
  I.fillField('//*[@id="htmleditor-1055-inputCmp"]', 'Semoga Masuk Sleekr')
  I.wait(3);
  I.click('//*[@id="save-task-edit-btn"]')
  I.wait(2);
 
});

Scenario('Mark Complete Task', (I) => {
  I.amOnPage('');
  I.wait(7);
  I.click('//*[@id="splitbutton-1011"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1037-inputEl"]','Test 1')
  I.wait(5);
  I.pressKey('\n');
  I.wait('5');
  I.click('//*[@id="gridview-1027-record-4"]/tbody/tr[2]');//click
  I.wait('3');
  I.click('//*[@id="mark-complete-btn-btnIconEl"]');
  I.wait('3');
  
});

Scenario('Delete Task', (I) => {
  I.amOnPage('');
  I.wait(7);
  I.click('//*[@id="splitbutton-1011"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1037-inputEl"]','Test 1')
  I.wait(5);
  I.pressKey('\n');
  I.wait('5');
  I.click('//*[@id="gridview-1027-record-4"]/tbody/tr[2]');//click
  I.wait('3');
  I.click('//*[@id="delete-task-btn-btnIconEl"]');
  I.wait('3');
  I.click('//*[@id="button-1006-btnInnerEl"]');
  I.wait('2');
  
});

Scenario('Show Complete Task', (I) => {
  I.amOnPage('');
  I.wait(7);
  I.click('//*[@id="splitbutton-1011"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1037-inputEl"]','Test 1')
  I.wait(5);
  I.pressKey('\n');
  I.click('//*[@id="gridview-1027-record-4"]/tbody/tr[2]');//click
  I.wait('3');
  I.click('//*[@id="mark-complete-btn-btnIconEl"]');
  I.wait('3');
  I.fillField('//*[@id="textfield-1037-inputEl"]','Test 2')
  I.wait(5);
  I.pressKey('\n');
  I.fillField('//*[@id="textfield-1037-inputEl"]','Test 3')
  I.wait(5);
  //date picker
  I.click('//*[@id="datefield-1039-trigger-picker"]');
  I.wait(2);
  I.click('//*[@id="datefield-1039-picker-cell-22"]');
  I.wait(3);
  I.pressKey('\n');
  I.click('//*[@id="show-complete-btn-btnIconEl"]')
  I.wait(2)

});

Scenario('Show Active Task', (I) => {
  I.amOnPage('');
  I.wait(7);
  I.click('//*[@id="splitbutton-1011"]');
  I.wait(5);
  I.fillField('//*[@id="textfield-1037-inputEl"]','Test 1')
  I.wait(5);
  I.pressKey('\n');
  I.click('//*[@id="gridview-1027-record-4"]/tbody/tr[2]');//click
  I.wait('3');
  I.click('//*[@id="mark-complete-btn-btnIconEl"]');
  I.wait('3');
  I.fillField('//*[@id="textfield-1037-inputEl"]','Test 2')
  I.wait(5);
  I.pressKey('\n');
  I.fillField('//*[@id="textfield-1037-inputEl"]','Test 3')
  I.wait(5);
  //date picker
  I.click('//*[@id="datefield-1039-trigger-picker"]');
  I.wait(2);
  I.click('//*[@id="datefield-1039-picker-cell-22"]');
  I.wait(3);
  I.pressKey('\n');
  I.click('//*[@id="show-active-btn-btnIconEl"]')
  I.wait(2)
  
});










Feature('Stop me', {timeout:5000});
