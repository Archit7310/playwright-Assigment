export class CommonUtils {

    static formatProductName(productName: string): string {
        return productName
            .toLowerCase()
            .replaceAll(' ', '-');
    }
    
}