show tables;

describe user;

describe task;

describe status;

select * from task;

select * from status;

select name from status;

select name,id from status where id=1;

select * from user where phone='483-396-8795';
select * from user 
where name like "A%rik%";

select * from task
 where title like '%wash%'
 order by id desc
 limit 2,2;
 
 select * from task
 where title like '%wash%' 
 and user_id=8;
 
 select * from task
 where title like '%wash%' or description;
 
  select * from task
 where title like '%wash%' or description is not null;

select count(*)  from task;

select count(description)  from task;

select count(id),month(created) 
 from task
 group by month(created);
 
 select count(id),year(created) 
 from task
 group by year(created);
 
 select count(id),day(created) 
 from task
 group by day(created);
 
 select count(id),day(created) as created_day 
 from task
 group by created_day;
 
 select count(id),day(created) as created_day 
 from task as t
 group by created_day;
 
 select sum(id) 
 from task;
 
 select min(created) from task;
 select max(created) from task;
 
 describe task;
 
 select * from task limit 5;
 
 select * from task,user where user.name like 'Aarika%' limit 5;
 
 select user.name,task.id, task.title
 from task,user where user.name like 'Aarika%' limit 5;
 
 select  user.name,task.id, task.title,user.id
 from task,user where user.name like 'Aarika%' and task.user_id = user.id;
 
 select  user.name,task.id, task.title,user.id
 from task join user on task.user_id = user.id
 where user.name like 'Aarika%';
 
 select task.title, status.name from task, status where status.name = 'in progress';
 
 select * from task join status  where status.name = 'in progress';
 
 select task.title, status.name from task join status  where status.name = 'in progress';
 
 
 select task.title, user.id, task.user_id, user.name, status.id, task.status_id, status.name
from (task join user on task.user_id=user.id) join status on status.id = task.status_id;

select * from user;
 describe task;
 
select task.title, user.id, task.user_id, user.name, status.id, task.status_id, status.name
from (task join user on task.user_id=user.id) join status on status.id = task.status_id;
 
