# hrmsFront-end
HRMS REACT PROJECT


public static void main(String[] args) {
        
        int dongu = 0;

        for (int j = 1; j <= 100; j++) {
            dongu=0;
            for (int i = 2; i < j; i++) {
                if (j % i == 0) {
                    dongu++;
                }
            }
            
            if(dongu==0 && j!=1)
            {
                System.out.println(j);
            }
        }

    }
