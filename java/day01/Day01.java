
class Day01 {
    public interface People {
        void run();

        default void speak() {
            System.out.println("speak");
        }

    }

    public static void main(String[] args) throws InterruptedException {
        class Counter {
            private int count;

            public synchronized void increment() {
                ++this.count;
            }

            public synchronized int getCount() {
                return this.count;
            }
        }

        final Counter counter = new Counter();
        class Mythread extends Thread {
            @Override
            public void run() {
                super.run();
                for (int i = 0; i < 10000; i++) {
                    counter.increment();
                }
            }
        }
        Mythread thread_01 = new Mythread();
        Mythread thread_02 = new Mythread();
        thread_01.start();
        thread_02.start();
        thread_01.join();
        thread_02.join();
        System.out.println(counter.getCount());

        People p = () -> System.out.println("lambada");
        People p2 = new People() {
            @Override
            public void run() {
                System.out.println("lambada2");
            }

            public void speak() {
                System.out.println("speak222");
            }
        };
        p.run();
        p.speak();
        p2.run();
        p2.speak();

    }
}