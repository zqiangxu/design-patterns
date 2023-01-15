export class Singleton {
    private static instance: Singleton;
    public static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        
        this.instance = new Singleton();
        return this.instance;
    }
}