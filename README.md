# task-tracker-cli
CLI tool for task tracking

## Installation

1. Clone the GitHub repository to your desired directory:
```
git clone https://github.com/AlejandroMarques/task-tracker-cli.git
```

2. Navigate to the project directory:
```
cd task-tracker-cli
```

3. Run the project configuration command:
```
npm run configure
```

## Usage
```
# Adding a new task
task-tracker add "Buy groceries"
# Output: Task "Buy groceries" created

# Updating and deleting tasks
task-tracker update 1 "Buy groceries and cook dinner"
task-tracker delete 1

# Marking a task as in progress or done
task-tracker mark-in-progress 1
task-tracker mark-done 1

# Listing all tasks
task-tracker list

# Listing tasks by status
task-tracker list done
task-tracker list todo
task-tracker list in-progress

```