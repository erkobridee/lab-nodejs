import java.io.*;

public class NodeMsgStdin {
  public static void main(String args[]) throws IOException {
    BufferedReader stdin = new BufferedReader(new InputStreamReader (System.in));

    Boolean execFlag = true;

    String msgFromNode;

    while(execFlag) {
      msgFromNode = stdin.readLine();
      
      if(msgFromNode != null && msgFromNode.trim().length() > 0) {

        if("exit".equals(msgFromNode)) {
          execFlag = false; 
          break;
        }

        System.out.println("Java Return >> Node Message: [" + msgFromNode + "]");
      }
    }    
  }
}