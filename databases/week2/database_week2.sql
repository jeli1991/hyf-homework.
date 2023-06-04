-- tasks to users whose email ends in @spotify.com
SELECT `title` FROM `task`
INNER JOIN `user_task` ON `task`.`id` = `user_task`.`task_id`
INNER JOIN `user` ON `user`.id = `user_task`.`user_id`
WHERE `user`.`email` LIKE '%@spotify.com%'


--  all tasks for 'Donald Duck' and status 'Not started'
SELECT `title` FROM `task`
INNER JOIN `user_task` ON `task`.`id` = `user_task`.`task_id`
INNER JOIN `user` ON `user`.id = `user_task`.`user_id`
INNER JOIN `status` ON `task`.`status_id` = `status`.`id`
WHERE `user`.`name` = 'Donald Duck' AND `status`.`name` = 'Not started';

--  all  tasks for 'Maryrose Meadows' created in september 
SELECT `title` FROM `task`
INNER JOIN `user_task` ON `task`.`id` = `user_task`.`task_id`
INNER JOIN `user` ON `user_task`.`user_id` = `user`.`id`
WHERE `user`.`name` = 'Maryrose Meadows' AND month(`task`.`created`) = 9;


-- tasks created in each month
SELECT COUNT(*) FROM `task`
GROUP BY DATE_FORMAT(`created`, '%Y-%m')