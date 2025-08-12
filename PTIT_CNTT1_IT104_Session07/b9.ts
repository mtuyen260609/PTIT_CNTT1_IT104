class Comment {
    public id: number;
    public userId: number;
    public content: string;
    public replies: Comment[];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

    public addReply(reply: Comment): void {
        this.replies.push(reply);
    }
}

class Post {
    public id: number;
    public likes: number[];
    public comments: Comment[];
    public userId: number;
    public content: string;

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
    }

    public addLike(userId: number): void {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }

    public addComment(comment: Comment): void {
        this.comments.push(comment);
    }
}

class User {
    public id: number;
    public posts: Post[];
    public followers: User[];

    constructor(id: number) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }

    public createPost(content: string): Post {
        const newPost = new Post(Date.now(), this.id, content);
        this.posts.push(newPost);
        return newPost;
    }

    public comment(postId: number, commentContent: string): void {
        for (let user of this.followers) {
            for (let post of user.posts) {
                if (post.id === postId) {
                    const newComment = new Comment(Date.now(), this.id, commentContent);
                    post.addComment(newComment);
                    return;
                }
            }
        }
    }

    public follow(user: User): void {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
        }
    }

    public likePost(postId: number): void {
        for (let user of this.followers) {
            for (let post of user.posts) {
                if (post.id === postId) {
                    post.addLike(this.id);
                    return;
                }
            }
        }
    }

    public viewFeed(): void {
        for (let user of this.followers) {
            for (let post of user.posts) {
                console.log(`[${user.id}] ${post.content} (Likes: ${post.likes.length}, Comments: ${post.comments.length})`);
            }
        }
    }
}
const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);
user1.follow(user2);
user1.follow(user3);
const postA = user2.createPost("Hôm nay trời đẹp quá!");
const postB = user3.createPost("Đang học TypeScript vui phết!");
user1.likePost(postA.id);
user1.comment(postB.id, "Hay quá, cố gắng lên!");
user1.viewFeed();